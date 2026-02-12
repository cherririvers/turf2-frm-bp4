export function parseMarkdown(content: string): string {
  const lines = content.split('\n');
  const result: string[] = [];
  let inList = false;
  let inOrderedList = false;
  let listItems: string[] = [];

  const processInlineMarkdown = (text: string): string => {
    let processed = text;
    processed = processed.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    processed = processed.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    processed = processed.replace(/`([^`]+)`/g, '<code class="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-emerald-700">$1</code>');
    processed = processed.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-emerald-600 hover:underline">$1</a>');
    return processed;
  };

  const flushList = () => {
    if (listItems.length > 0) {
      const tag = inOrderedList ? 'ol' : 'ul';
      const listClass = inOrderedList
        ? 'list-decimal list-inside space-y-2 my-4 ml-4'
        : 'list-disc list-inside space-y-2 my-4 ml-4';
      result.push(`<${tag} class="${listClass}">`);
      listItems.forEach((item) => {
        result.push(`<li class="text-gray-700">${processInlineMarkdown(item)}</li>`);
      });
      result.push(`</${tag}>`);
      listItems = [];
      inList = false;
      inOrderedList = false;
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmedLine = line.trim();

    if (trimmedLine === '') {
      flushList();
      continue;
    }

    if (trimmedLine === '---') {
      flushList();
      result.push('<hr class="my-8 border-gray-200" />');
      continue;
    }

    if (trimmedLine.startsWith('## ')) {
      flushList();
      result.push(`<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">${processInlineMarkdown(trimmedLine.slice(3))}</h2>`);
      continue;
    }

    if (trimmedLine.startsWith('### ')) {
      flushList();
      result.push(`<h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">${processInlineMarkdown(trimmedLine.slice(4))}</h3>`);
      continue;
    }

    if (trimmedLine.startsWith('#### ')) {
      flushList();
      result.push(`<h4 class="text-lg font-semibold text-gray-900 mt-6 mb-2">${processInlineMarkdown(trimmedLine.slice(5))}</h4>`);
      continue;
    }

    if (trimmedLine.startsWith('- ') || trimmedLine.startsWith('* ')) {
      if (!inList || inOrderedList) {
        flushList();
        inList = true;
        inOrderedList = false;
      }
      listItems.push(trimmedLine.slice(2));
      continue;
    }

    const orderedMatch = trimmedLine.match(/^(\d+)\.\s+(.+)$/);
    if (orderedMatch) {
      if (!inList || !inOrderedList) {
        flushList();
        inList = true;
        inOrderedList = true;
      }
      listItems.push(orderedMatch[2]);
      continue;
    }

    if (trimmedLine.startsWith('|')) {
      flushList();
      const isHeaderSeparator = trimmedLine.match(/^\|[\s-:|]+\|$/);
      if (isHeaderSeparator) continue;

      const cells = trimmedLine.split('|').filter(Boolean).map((c) => c.trim());
      const nextLine = lines[i + 1]?.trim();
      const isHeader = nextLine && nextLine.match(/^\|[\s-:|]+\|$/);

      if (isHeader) {
        result.push('<table class="w-full border-collapse my-6"><thead><tr>');
        cells.forEach((cell) => {
          result.push(`<th class="bg-gray-100 border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">${processInlineMarkdown(cell)}</th>`);
        });
        result.push('</tr></thead><tbody>');
      } else {
        result.push('<tr>');
        cells.forEach((cell) => {
          result.push(`<td class="border border-gray-200 px-4 py-3 text-gray-700">${processInlineMarkdown(cell)}</td>`);
        });
        result.push('</tr>');
      }
      continue;
    }

    if (trimmedLine.startsWith('> ')) {
      flushList();
      result.push(`<blockquote class="border-l-4 border-emerald-500 bg-gray-50 py-3 px-6 my-4 rounded-r-lg italic text-gray-700">${processInlineMarkdown(trimmedLine.slice(2))}</blockquote>`);
      continue;
    }

    flushList();
    result.push(`<p class="text-gray-700 leading-relaxed my-4">${processInlineMarkdown(trimmedLine)}</p>`);
  }

  flushList();

  let html = result.join('\n');
  html = html.replace(/<\/tbody>\s*<tr>/g, '<tr>');
  html = html.replace(/<\/tr>\s*$/, '</tr></tbody></table>');

  return html;
}
