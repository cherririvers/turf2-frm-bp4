export interface Author {
  id: string;
  name: string;
  designation: string;
  bio: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  featuredImage: string;
  authorId: string;
  publishDate: string;
  readTime: number;
}

export const authors: Author[] = [
  {
    id: 'vishal-sharma',
    name: 'Vishal Sharma',
    designation: 'Founder & Chief Executive Officer (CEO)',
    bio: 'Vishal is the visionary behind Turf 360, passionate about creating world-class sports facilities that bring communities together through the joy of sports.',
  },
  {
    id: 'nirupama-rana',
    name: 'Nirupama Rana',
    designation: 'Co-Founder & Managing Director',
    bio: 'Nirupama leads operations at Turf 360, ensuring every visitor experiences top-notch facilities and exceptional service.',
  },
  {
    id: 'sonu-pal',
    name: 'Sonu Pal',
    designation: 'Co-Founder & Executive Director',
    bio: 'Sonu brings extensive experience in sports facility management and is dedicated to promoting grassroots sports in the community.',
  },
  {
    id: 'yash-kuntal',
    name: 'Yash Kuntal',
    designation: 'Co-Founder & Chief Operating Officer (COO)',
    bio: 'Yash oversees day-to-day operations and strategic partnerships, working to make Turf 360 the premier sports destination in Noida.',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'best-football-turf-noida-sector-150-turf-360',
    title: 'Best Football Turf in Noida Sector 150 - Complete Guide to Turf 360',
    excerpt: 'Discover why Turf 360 is the top-rated football turf in Noida Sector 150. Learn about our FIFA-quality synthetic grass, floodlit facilities, and how to book your next game.',
    content: `
## Why Turf 360 is the Best Football Turf in Noida Sector 150

Looking for the perfect place to play football in Noida? Turf 360 in Sector 150 has quickly become the go-to destination for football enthusiasts across the NCR region. Here's everything you need to know about our world-class facilities.

### Premium Quality Synthetic Turf

Our football turf features high-quality synthetic grass that mimics the feel of natural grass while offering superior durability and consistency. The surface provides excellent ball control, reduces the risk of injuries, and remains playable in all weather conditions.

The turf is specifically designed for football and futsal, with optimal pile height and density that professionals and amateurs alike appreciate. Unlike natural grass fields that can become muddy or uneven, our synthetic surface delivers consistent performance every single game.

### Professional-Grade Facilities

At Turf 360, we've invested in creating an environment that makes every game special:

- **Floodlit Playing Area**: Our professional lighting system allows for evening and night games, perfect for those who work during the day
- **Proper Pitch Markings**: Clear, regulation markings for both football and futsal formats
- **Quality Goal Posts**: Sturdy, professional-grade goal posts with proper nets
- **Spectator Seating**: Comfortable viewing areas for friends and family
- **Changing Rooms**: Clean, well-maintained facilities with lockers

### Flexible Booking Options

We understand that everyone has different schedules and needs. That's why we offer:

- **Hourly Bookings**: Book by the hour for casual games with friends
- **Regular Slots**: Reserve weekly slots for your team's practice sessions
- **Tournament Packages**: Special rates for organizing competitions
- **Corporate Events**: Customized packages for team-building activities

### Location Advantage

Sector 150, Noida offers the perfect blend of accessibility and serenity. Located away from the congested city center but well-connected via the Noida-Greater Noida Expressway, Turf 360 is easy to reach from:

- Central Noida (20-25 minutes)
- Greater Noida (10-15 minutes)
- South Delhi (35-40 minutes)
- Ghaziabad (30-35 minutes)

### Beyond Just Football

While football is our passion, Turf 360 is a complete sports destination. After your game, you can:

- Enjoy refreshments at our in-house Brew N Play cafe
- Try your hand at pickleball or snooker
- Organize mixed-sport events for your group

### How to Book

Booking your slot at Turf 360 is simple:

1. **Call Us**: Reach out directly at our booking number
2. **WhatsApp**: Send a message for quick slot confirmation
3. **Walk-In**: Visit us to check availability and book on the spot

### Tips for First-Time Visitors

- Arrive 10-15 minutes before your slot to warm up
- Bring proper football shoes (turf shoes recommended)
- Stay hydrated - we have refreshments available
- Don't forget to bring your own football or rent one from us

### Pricing That Makes Sense

We believe quality sports facilities should be accessible to everyone. Our pricing is competitive and transparent, with no hidden charges. Contact us for current rates and any ongoing promotions.

---

Ready to experience the best football turf in Noida Sector 150? Visit Turf 360 and discover why hundreds of players choose us every week for their football fix.
    `,
    category: 'Local Guide',
    tags: ['football turf', 'noida', 'sector 150', 'sports facility', 'futsal'],
    featuredImage: 'https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    authorId: 'vishal-sharma',
    publishDate: '2026-02-10',
    readTime: 6,
  },
  {
    id: '2',
    slug: 'top-10-weekend-activities-noida-sports-enthusiasts',
    title: 'Top 10 Weekend Activities in Noida for Sports Enthusiasts',
    excerpt: 'Tired of the same old weekend routine? Explore the best sports and recreational activities in Noida that will keep you active, healthy, and entertained.',
    content: `
## Top 10 Weekend Activities in Noida for Sports Enthusiasts

Noida has transformed into a hub for sports and recreation over the past few years. If you're looking to make the most of your weekends while staying active, here are the top activities you should try.

### 1. Play Football at a Premium Turf

Nothing beats the thrill of a weekend football match with friends. Noida now boasts several high-quality synthetic turfs where you can enjoy the beautiful game regardless of weather conditions. Turf 360 in Sector 150 offers one of the best playing experiences in the region.

**Best for**: Groups of 10-14 players
**Duration**: 1-2 hours
**Tip**: Book in advance for weekend evening slots

### 2. Try Pickleball - The Fastest Growing Sport

Pickleball is taking India by storm, and for good reason. This paddle sport combines elements of tennis, badminton, and table tennis, making it easy to learn but challenging to master. It's perfect for all ages and fitness levels.

**Best for**: Couples, families, beginners
**Duration**: 1-2 hours
**Tip**: Many facilities offer equipment rental for beginners

### 3. Organize a Box Cricket Tournament

Box cricket brings the excitement of cricket to a compact format that's perfect for urban settings. With modified rules and smaller teams, you can enjoy competitive cricket without needing a full-sized ground.

**Best for**: Groups of 12-16 players
**Duration**: 2-4 hours
**Tip**: Great for office groups and friend circles

### 4. Relax with Snooker or Pool

For those who prefer a more relaxed sporting experience, snooker and pool offer the perfect blend of skill, strategy, and socializing. Many sports facilities in Noida now feature professional-grade tables.

**Best for**: Small groups of 2-4
**Duration**: 1-3 hours
**Tip**: Perfect as a post-game wind-down activity

### 5. Cycling on the Noida Expressway Cycle Track

The dedicated cycle track along the Noida Expressway offers a safe and scenic route for cycling enthusiasts. Early morning rides are particularly refreshing with minimal traffic and pleasant weather.

**Best for**: Solo riders or cycling groups
**Duration**: 1-2 hours
**Tip**: Start early to avoid the heat

### 6. Morning Jogging at Sector Parks

Noida's well-maintained sector parks provide excellent jogging tracks surrounded by greenery. Popular spots include parks in Sectors 50, 62, and 150.

**Best for**: Solo fitness enthusiasts
**Duration**: 30 minutes to 1 hour
**Tip**: Join a local running group for motivation

### 7. Swimming at Club Facilities

Several residential societies and sports clubs in Noida offer swimming facilities. Swimming is an excellent full-body workout that's easy on the joints.

**Best for**: Individuals or families
**Duration**: 1-2 hours
**Tip**: Check for guest access policies

### 8. Badminton at Indoor Courts

Badminton remains one of the most popular sports in India. Multiple indoor facilities across Noida offer well-maintained courts with proper lighting and flooring.

**Best for**: Pairs or groups of 4
**Duration**: 1-2 hours
**Tip**: Indoor courts mean weather is never an issue

### 9. Yoga and Outdoor Fitness Classes

Many parks and fitness centers in Noida offer weekend yoga and fitness sessions. These group activities are great for both physical and mental wellness.

**Best for**: All fitness levels
**Duration**: 1-2 hours
**Tip**: Try different instructors to find your style

### 10. Multi-Sport Day at Turf 360

Why choose one activity when you can enjoy multiple sports in a single visit? Facilities like Turf 360 offer football, pickleball, snooker, and more under one roof, making it perfect for groups with varied interests.

**Best for**: Groups with diverse preferences
**Duration**: 3-5 hours
**Tip**: Combine sports with cafe time for the complete experience

---

### Making the Most of Your Sports Weekend

Here are some tips to maximize your weekend sports activities:

- **Plan Ahead**: Book facilities in advance, especially for popular weekend slots
- **Stay Hydrated**: Carry water bottles and replenish fluids regularly
- **Warm Up Properly**: Reduce injury risk with proper stretching
- **Mix It Up**: Try different activities to work different muscle groups
- **Bring Friends**: Sports are more fun with company

### Why Regular Physical Activity Matters

Weekend sports aren't just about fun - they're an investment in your health:

- Reduces stress and anxiety
- Improves cardiovascular health
- Builds strength and flexibility
- Enhances social connections
- Boosts mood and energy levels

---

This weekend, step away from your screens and experience the joy of active living. Noida offers plenty of options for every interest and fitness level. See you on the field!
    `,
    category: 'Local Guide',
    tags: ['weekend activities', 'noida', 'sports', 'recreation', 'fitness'],
    featuredImage: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    authorId: 'nirupama-rana',
    publishDate: '2026-02-08',
    readTime: 7,
  },
  {
    id: '3',
    slug: 'futsal-vs-football-differences-which-to-play',
    title: 'Futsal vs Football: Key Differences and Which One Should You Play',
    excerpt: 'Confused between futsal and football? Learn the key differences in rules, pitch size, ball type, and playing style to decide which sport suits you best.',
    content: `
## Futsal vs Football: Understanding the Key Differences

Both futsal and football share the same DNA - score goals by kicking a ball into the opponent's net. But that's where the obvious similarities end. Whether you're a seasoned player or just getting started, understanding the differences between these two sports will help you choose the right one for your playing style.

### What is Futsal?

Futsal is an indoor variant of football played on a hard court surface. The name comes from the Spanish "fútbol sala" (indoor football). Developed in Uruguay in the 1930s, futsal has become the preferred small-sided game format recognized by FIFA.

### The Key Differences

#### 1. Playing Surface and Pitch Size

**Football (Turf)**:
- Played on synthetic or natural grass
- Full-size pitch: 100-110m x 64-75m
- Mini football/5-a-side: approximately 40m x 30m

**Futsal**:
- Played on hard court (similar to basketball court)
- Standard pitch: 38-42m x 20-25m
- Smaller, more confined space

#### 2. Team Size

**Football**: 11 players per side (7 for mini football, 5-6 for casual turf games)

**Futsal**: 5 players per side (including goalkeeper)

#### 3. The Ball

This is one of the most significant differences:

**Football**:
- Standard size 5 ball
- Higher bounce
- Weight: 410-450 grams

**Futsal**:
- Size 4 ball with reduced bounce
- Heavier feel despite smaller size
- Weight: 400-440 grams
- 30% less bounce than regular football

The low-bounce futsal ball is specifically designed to stay on the ground, encouraging close control and quick passing.

#### 4. Game Duration

**Football**: 90 minutes (two 45-minute halves)

**Futsal**: 40 minutes (two 20-minute halves with stopped clock)

The stopped clock in futsal means the game pauses when the ball goes out of play, leading to more actual playing time.

#### 5. Rules and Gameplay

**Slide Tackles**:
- Football: Allowed (within rules)
- Futsal: Generally prohibited, leading to cleaner play

**Goal Kicks**:
- Football: Kicked from goal area
- Futsal: Thrown by goalkeeper (must release within 4 seconds)

**Offside**:
- Football: Offside rule applies
- Futsal: No offside rule

**Substitutions**:
- Football: Limited substitutions
- Futsal: Unlimited "flying" substitutions

### Playing Style Comparison

#### Futsal Develops:

1. **Close Ball Control**: The smaller space demands excellent first touch
2. **Quick Decision Making**: Less time and space means faster thinking
3. **Technical Skills**: Dribbling, passing accuracy, and creativity flourish
4. **Defensive Awareness**: Constant pressure requires smart positioning

#### Football Emphasizes:

1. **Physical Endurance**: Larger pitch demands more running
2. **Long Passing**: Ability to switch play and use the full width
3. **Tactical Positioning**: More complex formations and strategies
4. **Aerial Ability**: Headers and long balls play a bigger role

### Why Many Professionals Played Futsal

Legends like Ronaldinho, Messi, Neymar, and Cristiano Ronaldo all developed their skills playing futsal in their youth. The confined space and quick play accelerate technical development.

Benefits of futsal training:
- Touches the ball 600% more often than in football
- Develops ambidextrous ability
- Improves spatial awareness
- Enhances quick reflexes

### Which Should You Play?

**Choose Futsal if**:
- You want to improve your technical skills rapidly
- You enjoy fast-paced, high-scoring games
- You have limited players (5-a-side is easier to organize)
- You prefer playing indoors
- You're recovering from injury (less physical contact)

**Choose Football if**:
- You enjoy the full tactical complexity of the game
- You want more physical exercise per session
- You prefer playing on grass/turf
- You're training for competitive football leagues
- You enjoy longer, more strategic matches

### The Best of Both Worlds

At Turf 360, we encourage players to enjoy both formats. Our synthetic turf is perfect for casual football and futsal-style games, allowing you to experience the benefits of both sports.

Many players find that alternating between futsal and football:
- Prevents training monotony
- Develops a more complete skill set
- Provides variety in their sporting routine
- Improves overall football intelligence

### Tips for Transitioning Between Sports

**Football to Futsal**:
- Focus on keeping the ball close
- Speed up your decision-making
- Work on quick, short passes
- Prepare for more physical intensity in shorter bursts

**Futsal to Football**:
- Practice longer passes
- Build endurance for the larger pitch
- Learn to use space effectively
- Adjust to the higher-bouncing ball

---

Whether you choose futsal, football, or both, the most important thing is to get out there and play. Both sports offer incredible physical and mental benefits while being genuinely fun. See you on the pitch!
    `,
    category: 'Sports Tips',
    tags: ['futsal', 'football', 'sports comparison', 'playing tips', 'skill development'],
    featuredImage: 'https://images.pexels.com/photos/3148452/pexels-photo-3148452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    authorId: 'sonu-pal',
    publishDate: '2026-02-05',
    readTime: 8,
  },
  {
    id: '4',
    slug: 'complete-beginners-guide-pickleball',
    title: "Complete Beginner's Guide to Pickleball: Rules, Equipment & Tips",
    excerpt: "New to pickleball? This comprehensive guide covers everything you need to know - from basic rules and scoring to essential equipment and beginner tips.",
    content: `
## Complete Beginner's Guide to Pickleball

Pickleball is the fastest-growing sport in the world, and for good reason. It's easy to learn, incredibly fun, and provides an excellent workout for all ages. If you've been curious about this paddle sport, this guide will get you started.

### What is Pickleball?

Pickleball is a paddle sport that combines elements of tennis, badminton, and table tennis. It's played on a badminton-sized court with a modified tennis net, using a paddle and a perforated plastic ball (similar to a wiffle ball).

The sport was invented in 1965 on Bainbridge Island, Washington, by three dads trying to entertain their bored children. Today, it's played by millions worldwide.

### Why Pickleball is Perfect for Beginners

1. **Easy to Learn**: Basic skills can be acquired in minutes
2. **Low Impact**: Easier on joints than tennis or running
3. **Social Sport**: Doubles play encourages interaction
4. **All Ages Welcome**: From kids to seniors
5. **Affordable**: Minimal equipment needed
6. **Quick Games**: Matches are typically 15-25 minutes

### The Court

A pickleball court measures 20 feet wide by 44 feet long (same as a doubles badminton court). Key areas include:

- **The Kitchen (Non-Volley Zone)**: A 7-foot zone on each side of the net where volleying is prohibited
- **Service Areas**: Right and left service courts
- **Baseline**: The back line of the court

The net height is 36 inches at the sidelines and 34 inches at the center.

### Essential Equipment

#### 1. Paddle

Pickleball paddles are solid (no strings) and larger than ping-pong paddles but smaller than tennis rackets.

**For Beginners**:
- Choose a mid-weight paddle (7.3-8.4 oz)
- Composite or graphite face
- Comfortable grip size (measure from your palm to fingertip)

#### 2. Ball

Pickleballs are plastic with holes (26-40 holes depending on indoor/outdoor use).

**Indoor balls**: Softer, fewer holes, slower play
**Outdoor balls**: Harder, more holes, faster play

#### 3. Appropriate Footwear

Court shoes with good lateral support are essential. Running shoes are not recommended as they lack side-to-side stability.

### Basic Rules

#### Serving

1. Serve diagonally to the opponent's service court
2. Serve underhand with paddle contact below waist level
3. Both feet must be behind the baseline
4. The serve must clear the net and the kitchen
5. Only one serve attempt (no second serves like tennis)

#### The Double Bounce Rule

This is pickleball's signature rule:
1. The serve must bounce before the receiving team returns it
2. The return must bounce before the serving team plays it
3. After these two bounces, volleys are allowed

This rule prevents "serve and volley" dominance and creates longer rallies.

#### The Kitchen (Non-Volley Zone)

- You cannot volley (hit the ball out of the air) while standing in the kitchen
- You can enter the kitchen to play a ball that has bounced
- Momentum cannot carry you into the kitchen after a volley

#### Scoring

- Only the serving team can score points
- Games are typically played to 11 points, win by 2
- In doubles, both players on a team get to serve before the serve passes to opponents (except at the start of the game)

**Score Calling**: In doubles, scores are called as three numbers:
- Serving team's score
- Receiving team's score
- Server number (1 or 2)

Example: "4-2-1" means serving team has 4, receiving team has 2, and it's the first server.

### Basic Shots

#### 1. The Serve
An underhand stroke that starts the point. Focus on consistency over power.

#### 2. The Return of Serve
Hit deep to the baseline to give yourself time to approach the net.

#### 3. The Dink
A soft shot that lands in the opponent's kitchen. This is the most important shot in pickleball.

#### 4. The Drive
A hard, flat shot used to put pressure on opponents.

#### 5. The Volley
Hitting the ball out of the air (not allowed in the kitchen).

#### 6. The Lob
A high, arcing shot used to push opponents back from the net.

### Strategy Tips for Beginners

#### 1. Get to the Kitchen Line
The team that controls the net usually wins. After the double bounce, move forward.

#### 2. Master the Dink
Soft games win matches. The dink neutralizes power players and creates opportunities.

#### 3. Aim for Consistency
Keep the ball in play. Most points are lost on errors, not won on winners.

#### 4. Target the Middle
In doubles, hitting between opponents causes confusion about who should take the ball.

#### 5. Be Patient
Pickleball rewards patience. Wait for the right ball to attack.

### Common Beginner Mistakes

1. **Standing at the baseline**: Get to the net after the double bounce
2. **Overhitting**: Power is less important than placement
3. **Volleying in the kitchen**: Remember the non-volley zone rules
4. **Ignoring the dink**: This shot separates good players from beginners
5. **Poor court positioning**: Stay aligned with your partner in doubles

### Pickleball Etiquette

- Call the score clearly before serving
- Call "out" balls promptly and honestly
- Compliment good shots from opponents
- Avoid foot faults - they're hard to call but important
- Rotate courts fairly during open play

### Getting Started at Turf 360

Turf 360 offers excellent pickleball facilities for players of all levels:

- Professional-grade courts
- Equipment available for beginners
- Welcoming community of players
- Suitable for casual play and organized sessions

### Your First Game Checklist

- [ ] Comfortable athletic clothing
- [ ] Court shoes (not running shoes)
- [ ] Water bottle
- [ ] Paddle (or rent one)
- [ ] Positive attitude

---

Pickleball's beauty lies in its simplicity and accessibility. Within your first hour of playing, you'll understand why millions have fallen in love with this sport. The only way to truly learn is to get on the court and play. We'll see you there!
    `,
    category: 'Sports Tips',
    tags: ['pickleball', 'beginners guide', 'rules', 'equipment', 'how to play'],
    featuredImage: 'https://images.pexels.com/photos/8224057/pexels-photo-8224057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    authorId: 'yash-kuntal',
    publishDate: '2026-02-01',
    readTime: 9,
  },
  {
    id: '5',
    slug: 'box-cricket-rules-complete-guide',
    title: 'Box Cricket Rules: Everything You Need to Know to Play',
    excerpt: 'Learn the complete rules of box cricket, including batting, bowling, scoring, and how it differs from traditional cricket. Perfect for organizing your own tournament.',
    content: `
## Box Cricket Rules: The Complete Guide

Box cricket has revolutionized how we play cricket in urban areas. This modified format brings all the excitement of cricket to smaller spaces, making it perfect for turfs, indoor facilities, and even rooftops. Here's everything you need to know about box cricket rules.

### What is Box Cricket?

Box cricket is an adapted version of cricket played in an enclosed area (the "box") with modified rules that suit smaller teams and limited spaces. The enclosed nature means there are no traditional boundaries - the ball remains in play when it hits the side nets or walls.

### Standard Box Cricket Setup

#### Playing Area
- Typically 60-80 feet long and 30-40 feet wide
- Enclosed by nets on all sides
- Pitch length: 16-18 yards (shorter than standard 22 yards)

#### Teams
- Usually 6 players per side
- Variations allow for 5, 7, or 8 players

#### Match Format
- Typically 6-8 overs per innings
- Can be adjusted based on time constraints

### Batting Rules

#### General Batting Rules
1. Two batsmen on the field at all times
2. All players must bat in the designated order
3. Standard cricket dismissals apply (bowled, caught, run out, stumped, LBW)

#### Scoring Zones
Box cricket introduces zone-based bonus runs:

**Direct Hits to Designated Zones**:
- Back net (on the full): 6 runs
- Side nets (on the full): 4 runs
- Along the ground to back net: 2 runs

**Note**: Exact scoring zones vary by facility. Always confirm local rules before playing.

#### Special Batting Rules
- **Last Man Standing**: When all but one batsman are out, the last batsman continues batting alone
- **Retirement Rules**: Some tournaments require batsmen to retire after scoring a set number (e.g., 25 runs)
- **One Bounce Catches**: Catches taken after one bounce off the side net may count as out (varies by rules)

### Bowling Rules

#### Standard Bowling Regulations
1. Overarm bowling is mandatory
2. No-balls and wides give extra runs plus a free hit (common variation)
3. Each bowler can bowl a maximum of 2 overs (in a 6-over match)

#### Common Bowling Restrictions
- **Bouncer Limit**: Maximum one bouncer per over
- **Full Toss Height**: Above waist is a no-ball
- **Underarm**: Not allowed unless specifically permitted

#### No-Ball Rules
- Front foot crossing the crease
- Above waist-high full toss
- Bouncer above head height
- Wide outside the wide marking

### Fielding Rules

#### Fielding Positions
1. All 6 players field when the opposition bats
2. Wicketkeeper is mandatory
3. Restrictions on close-in fielders may apply

#### Special Fielding Rules
- **Net Catches**: Ball caught after rebounding from nets within the playing area may be out (check local rules)
- **Boundary Assists**: No traditional boundaries - ball hitting nets stays in play
- **Overthrows**: Ball hitting nets behind wicket results in additional runs

### Dismissal Types

All standard cricket dismissals apply:

1. **Bowled**: Ball hits the stumps
2. **Caught**: Ball caught before bouncing (standard catch)
3. **Run Out**: Batsman out of crease when stumps are broken
4. **Stumped**: Keeper breaks stumps with batsman out of crease
5. **LBW**: Ball would have hit stumps but hit pads instead
6. **Hit Wicket**: Batsman breaks own stumps while playing

#### Box Cricket Specific Dismissals
- **Caught off Net**: Catching a ball that rebounds off the net (if local rules allow)
- **Timed Out**: Taking too long to come to the crease

### Common Rule Variations

Different facilities and tournaments may use these variations:

#### Powerplay Rules
- First 2 overs: Only 2 fielders outside the inner circle
- Remaining overs: Standard fielding

#### Super Over
In case of a tie:
- Each team bats for 1 over
- 3 batsmen per side
- Highest score wins
- If still tied, sudden death or boundary count

#### Last Over Rules
- Some formats allow the last batsman to continue if others are out
- Minus runs for getting out in the last over

### Organizing a Box Cricket Tournament

#### Team Registration
- Confirm player count (usually 6-8 players per team)
- Collect team names and captain details
- Establish age groups if applicable

#### Format Selection
- League stage followed by knockouts
- Direct knockout
- Round-robin for smaller groups

#### Match Rules Document
Prepare a clear document covering:
- Overs per innings
- Players per team
- Scoring zones
- Specific dismissal rules
- Tie-breaker rules

### Tips for Better Box Cricket

#### For Batsmen
1. **Placement over Power**: Smart placement beats brute force in enclosed spaces
2. **Use the Angles**: Learn to use nets for deflections
3. **Quick Running**: Short boundaries mean quick singles add up
4. **Adapt to Surface**: Turf and concrete play differently

#### For Bowlers
1. **Vary Your Pace**: Change-ups are effective in short formats
2. **Target the Stumps**: Less margin for error in box cricket
3. **Use the Crease**: Create different angles
4. **Slower Balls**: Especially effective in the death overs

#### For Fielders
1. **Quick Reflexes**: Ball comes back fast off nets
2. **Communication**: Essential to avoid collisions
3. **Backing Up**: Always back up throws
4. **Anticipate Deflections**: Read ball off nets

### Safety Considerations

1. **Proper Footwear**: Turf shoes with good grip
2. **Warm-Up**: Essential before playing
3. **Protective Gear**: Helmets recommended for batsmen
4. **Net Awareness**: Stay alert for balls rebounding
5. **Hydration**: Keep water handy

### Box Cricket at Turf 360

Turf 360 offers the perfect venue for box cricket:
- Properly enclosed turf area
- Clear boundary markings
- Professional-grade pitch
- Lighting for evening games
- Space for spectators

Whether you're organizing a corporate tournament or a friendly match between friends, our facilities accommodate all skill levels.

---

Box cricket has made the gentleman's game accessible to everyone, regardless of space constraints. Understanding the rules ensures fair play and maximum enjoyment. Gather your team and book your slot for an exciting game of box cricket!
    `,
    category: 'Sports Tips',
    tags: ['box cricket', 'cricket rules', 'tournament', 'indoor cricket', 'cricket format'],
    featuredImage: 'https://images.pexels.com/photos/3657154/pexels-photo-3657154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    authorId: 'vishal-sharma',
    publishDate: '2026-01-28',
    readTime: 10,
  },
  {
    id: '6',
    slug: 'health-benefits-playing-football-regularly',
    title: '5 Amazing Health Benefits of Playing Football Regularly',
    excerpt: 'Discover how playing football regularly can transform your physical and mental health. From cardiovascular fitness to stress relief, here are the top benefits.',
    content: `
## 5 Amazing Health Benefits of Playing Football Regularly

Football is more than just a game - it's a complete workout that benefits your body and mind in ways few other activities can match. Whether you're playing a casual match with friends or competing in a local league, regular football offers incredible health benefits.

### 1. Superior Cardiovascular Health

Football is essentially interval training disguised as fun. During a typical game, you alternate between walking, jogging, running, and sprinting - the perfect recipe for cardiovascular fitness.

#### What Happens to Your Heart

- **Improved Heart Efficiency**: Your heart becomes stronger, pumping more blood with each beat
- **Lower Resting Heart Rate**: A fit heart doesn't need to work as hard
- **Better Blood Circulation**: Enhanced oxygen delivery throughout your body
- **Reduced Blood Pressure**: Regular play helps maintain healthy blood pressure levels

#### The Numbers

Research shows that playing football for just one hour can burn between 500-700 calories, depending on intensity. Over time, this contributes to:
- 35% reduction in cardiovascular disease risk
- Improved cholesterol levels
- Better blood sugar regulation

### 2. Full-Body Strength and Conditioning

Unlike gym workouts that often isolate muscle groups, football works your entire body simultaneously.

#### Lower Body

- **Quadriceps and Hamstrings**: Running, jumping, and kicking
- **Calves**: Constant movement and direction changes
- **Glutes**: Sprinting and lateral movements
- **Hip Flexors**: Kicking motion and agility

#### Upper Body and Core

- **Core Muscles**: Balance, shielding the ball, changing direction
- **Shoulders and Arms**: Throw-ins, balance during running
- **Back Muscles**: Posture maintenance and body control

#### Bone Health

The weight-bearing nature of football promotes:
- Increased bone density
- Reduced risk of osteoporosis
- Stronger skeletal structure

### 3. Enhanced Mental Health and Stress Relief

The mental health benefits of football are equally impressive as the physical ones.

#### Endorphin Release

Physical activity triggers the release of endorphins - your brain's feel-good chemicals. After a good game, you experience:
- Elevated mood
- Reduced anxiety
- Natural stress relief
- Better sleep quality

#### Social Connection

Football is inherently social. Playing regularly provides:
- **Sense of Belonging**: Being part of a team
- **Social Support Network**: Friends who share your interests
- **Reduced Loneliness**: Regular interaction with others
- **Communication Skills**: On-field coordination improves off-field communication

#### Cognitive Benefits

Research indicates football players show improvements in:
- Concentration and focus
- Decision-making speed
- Spatial awareness
- Memory function

### 4. Improved Coordination, Balance, and Agility

Football requires and develops a unique combination of motor skills.

#### Coordination

- **Hand-Eye-Foot Coordination**: Tracking the ball while moving
- **Body Awareness**: Knowing where your limbs are in space
- **Timing**: Connecting with the ball at the right moment

#### Balance

- **Static Balance**: Holding position while shielding
- **Dynamic Balance**: Maintaining control while moving
- **Recovery Balance**: Regaining stability after challenges

#### Agility

Regular play improves:
- Direction change speed
- Reaction time
- Acceleration and deceleration
- Lateral movement ability

These skills transfer to daily life, reducing fall risk and improving overall movement quality.

### 5. Weight Management and Metabolic Health

Football is one of the most effective sports for maintaining a healthy weight.

#### Calorie Burn

A 70kg person playing football burns approximately:
- Casual play: 500 calories/hour
- Competitive play: 700+ calories/hour

#### Metabolic Benefits

Regular football contributes to:
- **Higher Basal Metabolic Rate**: Muscle gained increases calorie burn at rest
- **Better Insulin Sensitivity**: Improved blood sugar control
- **Reduced Visceral Fat**: The dangerous fat around organs
- **Appetite Regulation**: Exercise helps normalize hunger signals

#### Long-Term Weight Management

Unlike crash diets, football provides sustainable weight management through:
- Enjoyable activity you'll actually stick with
- Muscle building that prevents metabolic slowdown
- Community accountability
- Structured exercise schedule

### Bonus Benefits

#### Better Sleep

Physical exhaustion from football promotes:
- Faster sleep onset
- Deeper sleep cycles
- More restorative rest
- Consistent sleep patterns

#### Increased Discipline

Regular practice and games teach:
- Time management
- Commitment to schedules
- Goal setting
- Persistence through challenges

#### Longer Life

Studies show that recreational football players have:
- Lower all-cause mortality risk
- Better quality of life in older age
- Maintained independence longer

### Getting Started Safely

To maximize benefits while minimizing injury risk:

1. **Warm Up Properly**: 10-15 minutes of dynamic stretching
2. **Start Gradually**: Don't go from zero to daily games
3. **Use Proper Footwear**: Turf shoes for synthetic surfaces
4. **Stay Hydrated**: Drink before, during, and after
5. **Listen to Your Body**: Rest when needed
6. **Cool Down**: Gentle stretching after play

### How Often Should You Play?

For optimal health benefits:
- **Minimum**: 1-2 sessions per week
- **Ideal**: 2-3 sessions per week
- **Allow Recovery**: At least one rest day between intense sessions

### Making Football Part of Your Routine

Tips for consistent play:
- Book regular weekly slots
- Find a consistent group of players
- Join a local league or club
- Use facilities like Turf 360 that offer flexible booking

---

Football offers a rare combination of physical exercise, mental stimulation, and social connection. The health benefits extend far beyond the pitch, improving your quality of life in measurable ways. The best part? You're having so much fun, you forget you're exercising.

Ready to experience these benefits yourself? Lace up your boots and join us at Turf 360!
    `,
    category: 'Health & Fitness',
    tags: ['health benefits', 'football fitness', 'exercise', 'mental health', 'cardiovascular'],
    featuredImage: 'https://images.pexels.com/photos/1667583/pexels-photo-1667583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    authorId: 'nirupama-rana',
    publishDate: '2026-01-25',
    readTime: 8,
  },
  {
    id: '7',
    slug: 'team-sports-vs-gym-mental-health-benefits',
    title: 'Why Team Sports Are Better Than Gym Workouts for Mental Health',
    excerpt: 'While gym workouts have their place, team sports offer unique mental health benefits that solitary exercise simply cannot match. Here is why you should consider swapping some gym sessions for team play.',
    content: `
## Why Team Sports Are Better Than Gym Workouts for Mental Health

The gym has become synonymous with fitness. We dutifully log our hours on treadmills and weight machines, tracking every rep and calorie. But when it comes to mental health, there's growing evidence that team sports deliver benefits that solo gym sessions simply cannot match.

### The Loneliness Epidemic Meets Fitness

Modern life is increasingly isolated. We work from home, shop online, and socialize through screens. The gym, for all its physical benefits, often reinforces this isolation - headphones in, eyes forward, minimal human interaction.

Team sports offer an antidote. They force us to connect, communicate, and collaborate in ways that feed our fundamental human need for belonging.

### The Science of Social Exercise

#### Oxytocin and Connection

Team sports trigger the release of oxytocin, often called the "bonding hormone." This neurochemical:
- Reduces stress and anxiety
- Builds trust and connection
- Creates feelings of safety and belonging
- Enhances mood more than solo exercise

#### Endorphin Amplification

While all exercise releases endorphins, research shows that social exercise amplifies this effect. A study in the International Journal of Stress Management found that group exercisers reported 26% greater stress reduction than solo exercisers doing identical workouts.

### Five Mental Health Advantages of Team Sports

#### 1. Built-In Social Support Network

When you join a football team or pickleball group, you're not just finding exercise partners - you're building a support network.

**What This Provides**:
- People who notice when you're absent
- Conversations that extend beyond fitness
- Shared experiences that deepen relationships
- A sense of being valued by others

**Gym Comparison**: You might nod at regulars, but rarely form meaningful connections.

#### 2. Accountability That Actually Works

We've all bought gym memberships that went unused. Team sports create natural accountability that's more effective and less punishing.

**How It Works**:
- Your team needs you to show up
- Letting others down feels worse than letting yourself down
- Commitment is to people, not machines
- Positive peer pressure keeps you engaged

**Research Shows**: Team sport participants have 40% higher long-term adherence rates than solo gym-goers.

#### 3. Flow States and Present-Moment Awareness

The mental health benefits of "flow" - being completely absorbed in an activity - are well-documented. Team sports excel at creating flow states.

**Why Team Sports Induce Flow**:
- Unpredictable situations demand full attention
- Social coordination requires present-moment focus
- Variable challenges match skill development
- Immediate feedback from the game and teammates

**Gym Comparison**: Repetitive exercises can become mindless, missing the mental health benefits of engaged activity.

#### 4. Emotional Expression and Release

Team sports provide socially acceptable outlets for emotions that gym workouts don't.

**Healthy Emotional Release**:
- Celebration of goals and victories
- Shared frustration and commiseration
- Playful trash talk and banter
- Physical expression of excitement

**Why This Matters**: Suppressing emotions contributes to anxiety and depression. Team sports create space for authentic emotional expression.

#### 5. Purpose Beyond Personal Gain

Working toward a collective goal provides meaning that self-focused fitness lacks.

**The Power of Shared Purpose**:
- Contributing to something larger than yourself
- Experiencing collective achievement
- Developing selflessness and teamwork
- Building identity as part of a group

**Research Insight**: People who feel part of a community report 50% lower rates of depression.

### Addressing Common Objections

#### "I'm Not Athletic Enough"

Team sports exist at every skill level. Recreational leagues, casual pickup games, and beginner-friendly sports like pickleball welcome all abilities. The mental health benefits don't require elite performance.

#### "I Don't Have Time"

Consider this: You're likely already spending time at the gym. Replacing one or two gym sessions with team sports provides equal or better physical benefits plus significant mental health advantages.

#### "I'm an Introvert"

Team sports offer structured social interaction, which many introverts actually prefer to open-ended socializing. You have a defined role, clear activities, and natural conversation topics.

#### "I Prefer Working Out Alone"

Solo gym time still has value. The suggestion isn't to eliminate it, but to add team sports for their unique mental health benefits. Balance is key.

### The Comparison Chart

| Aspect | Team Sports | Gym Workout |
|--------|-------------|-------------|
| Social Connection | High | Low |
| Accountability | Built-in | Self-reliant |
| Emotional Expression | Encouraged | Limited |
| Flow State Potential | High | Moderate |
| Sense of Purpose | Collective | Individual |
| Variety | High | Can be repetitive |
| Fun Factor | Generally high | Variable |
| Long-term Adherence | Higher | Lower |

### Making the Transition

#### Start Small
- Join one regular weekly game
- Keep your gym routine for now
- Gradually adjust based on how you feel

#### Find Your Sport
- **Football/Futsal**: High energy, continuous play
- **Cricket**: Strategic, varied roles
- **Pickleball**: Easier to learn, social by nature
- **Basketball**: Fast-paced, skill-based

#### Find Your People
- Use local sports facility bulletin boards
- Join workplace sports teams
- Try apps that connect recreational players
- Visit Turf 360 for organized sessions

### The Mental Health Workout

Think of team sports as a complete mental health workout:

- **Warm-Up**: Social greetings and pre-game chat (connection)
- **Main Exercise**: The game itself (flow, purpose, physicality)
- **Cool-Down**: Post-game conversations (bonding, processing)
- **Recovery**: Sense of accomplishment and belonging (lasting effects)

### What the Research Concludes

A comprehensive review in The Lancet Psychiatry analyzed over 1.2 million adults and found:

- Team sports were associated with 22% fewer poor mental health days than solo exercise
- Social sports participants reported higher life satisfaction
- The combination of physical activity and social connection had synergistic effects

### The Bottom Line

Gym workouts will always have their place. They're convenient, customizable, and effective for physical fitness. But if mental health is a priority - and it should be - team sports offer benefits that no amount of treadmill time can match.

The human brain evolved in social groups, working together toward common goals. Team sports tap into this ancient wiring in ways that feel natural and rewarding.

---

Ready to experience the mental health benefits of team sports? Turf 360 offers football, pickleball, cricket, and more in a welcoming environment for all skill levels. Your brain will thank you.
    `,
    category: 'Health & Fitness',
    tags: ['mental health', 'team sports', 'gym comparison', 'social fitness', 'wellbeing'],
    featuredImage: 'https://images.pexels.com/photos/3621185/pexels-photo-3621185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    authorId: 'sonu-pal',
    publishDate: '2026-01-20',
    readTime: 9,
  },
  {
    id: '8',
    slug: 'plan-perfect-corporate-team-building-event',
    title: 'How to Plan the Perfect Corporate Team Building Event at a Sports Facility',
    excerpt: 'Looking to boost team morale and collaboration? Learn how to organize an effective corporate team building event using sports activities that actually work.',
    content: `
## How to Plan the Perfect Corporate Team Building Event

Corporate team building has evolved beyond trust falls and awkward icebreakers. Today's most effective team building happens on sports fields, where genuine collaboration, communication, and camaraderie develop naturally. Here's your complete guide to planning a team building event that employees will actually enjoy.

### Why Sports-Based Team Building Works

Traditional team building often feels forced. Sports activities succeed because they:

- **Create Natural Interaction**: No scripted conversations needed
- **Reveal Authentic Personalities**: People relax when playing
- **Build Real Skills**: Communication and teamwork transfer to work
- **Generate Lasting Memories**: Shared experiences create bonds
- **Include Everyone**: Multiple sports accommodate all fitness levels

### Step 1: Define Your Objectives

Before booking anything, clarify what you want to achieve:

#### Common Objectives

**Team Bonding**
- Breaking down departmental silos
- Helping new hires integrate
- Celebrating achievements

**Skill Development**
- Improving communication
- Building leadership capacity
- Enhancing problem-solving

**Morale Boost**
- Rewarding hard work
- Energizing during challenging periods
- Creating positive associations with the company

**Specific Goals**
- Launching new teams or projects
- Addressing specific team dynamics
- Quarterly or annual traditions

### Step 2: Know Your Audience

A successful event matches activities to participants.

#### Consider

- **Fitness Levels**: Include options for all abilities
- **Age Range**: Multi-generational activities
- **Interests**: Survey employees if possible
- **Physical Limitations**: Ensure inclusive alternatives
- **Team Size**: Different activities suit different numbers

### Step 3: Choose Your Activities

#### Football/Futsal Tournament

**Best For**: Large groups, competitive teams
**Team Size**: 5-7 per team, multiple teams
**Duration**: 2-4 hours
**Energy Level**: High

**Format Ideas**:
- Round-robin tournament
- Mixed department teams
- Leadership vs. team members match
- Skills challenges between games

#### Box Cricket

**Best For**: Cricket-loving cultures, mixed skills
**Team Size**: 6-8 per team
**Duration**: 2-4 hours
**Energy Level**: Moderate to high

**Format Ideas**:
- Quick-fire tournament
- Auction-style team selection
- Fun rules (managers must bowl, new hires bat first)

#### Pickleball

**Best For**: Mixed fitness levels, smaller groups
**Team Size**: Doubles format
**Duration**: 1-3 hours
**Energy Level**: Moderate

**Format Ideas**:
- Round-robin doubles
- Random partner rotation
- King of the court format

#### Multi-Sport Rotation

**Best For**: Diverse preferences, keeping energy high
**Activities**: Football, cricket, pickleball, snooker
**Duration**: 3-5 hours
**Energy Level**: Variable

**Format Ideas**:
- Teams rotate through stations
- Points accumulate across sports
- Choose-your-own-adventure format

### Step 4: Plan the Logistics

#### Timing

**Best Days**: Friday afternoon, Saturday
**Avoid**: Monday (back-to-work mindset), late evenings
**Duration**: 3-5 hours optimal (including food and socializing)

**Sample Schedule**:
- 2:00 PM - Arrival and welcome
- 2:30 PM - Warm-up and team formation
- 3:00 PM - Main activities
- 5:00 PM - Finals and awards
- 5:30 PM - Food and socializing
- 7:00 PM - Wrap-up

#### Venue Requirements

When selecting a facility like Turf 360, ensure:
- Adequate space for your group size
- Multiple activity options
- Changing facilities
- Food and beverage options
- Indoor backup if weather is uncertain
- Parking availability

#### Budget Considerations

**Typical Costs**:
- Venue and facility hire
- Equipment rental
- Food and beverages
- Prizes and awards
- Transportation (if needed)
- Photography/videography

**Cost-Saving Tips**:
- Book during off-peak hours
- Bring your own catering
- Use internal resources for photography
- Keep prizes symbolic rather than expensive

### Step 5: Form Teams Strategically

How you form teams matters more than you might think.

#### Effective Approaches

**Cross-Departmental**
- Mix different departments
- Break existing cliques
- Build new connections

**Random Selection**
- Removes politics from team formation
- Creates unexpected pairings
- Fun auction or draft format

**Skill Balancing**
- Distribute experienced players
- Ensure competitive matches
- Give everyone a chance to contribute

#### Avoid

- Self-selected teams (reinforces existing groups)
- Manager-heavy teams (power imbalances)
- All-star teams (demoralizing for others)

### Step 6: Facilitate Engagement

#### Before the Event

- Send clear communication about attire and what to expect
- Build anticipation with team name contests
- Share the schedule so people can plan
- Address concerns proactively

#### During the Event

- Brief welcome explaining the format
- Warm-up activities to break the ice
- Regular score updates and commentary
- Music to maintain energy
- Capture photos and videos

#### Keep Everyone Involved

- Rotating substitutions so all play
- Non-playing roles (referee, scorekeeper, cheerleader)
- Side activities for those resting
- Inclusive prizes (not just for winners)

### Step 7: Food and Refreshments

Never underestimate the importance of food.

#### During Activities
- Water stations
- Light snacks (fruits, energy bars)
- Avoid heavy food before physical activity

#### Post-Activity
- Substantial food after exertion
- Options for dietary restrictions
- Celebratory element (cake for team wins)
- Alcohol optional (consider company culture)

### Step 8: Recognition and Prizes

Awards make the event memorable.

#### Prize Categories

**Performance**
- Tournament winners
- Best player (voted by peers)
- Most improved

**Fun Awards**
- Best team spirit
- Most enthusiastic
- Best dressed team
- Funniest moment

#### Prize Ideas

- Trophies or medals (keep them)
- Experience vouchers
- Extra time off
- Prime parking spot
- Choice of next team lunch venue

### Step 9: Capture and Share

Document the day for lasting impact.

#### During the Event
- Designate a photographer
- Capture candid moments
- Record key matches or plays
- Gather quotes and reactions

#### After the Event
- Share photos promptly
- Create highlight video
- Feature in company communications
- Display photos in office

### Step 10: Follow Through

The best team building extends beyond the day.

#### Immediate Follow-Up
- Thank you message to participants
- Share photos and results
- Gather feedback
- Celebrate on company channels

#### Long-Term
- Reference shared memories in team settings
- Plan recurring events
- Build on connections formed
- Track if objectives were met

### Common Mistakes to Avoid

1. **Over-Scheduling**: Leave time for organic interaction
2. **Mandatory Fun**: Position it as an invitation, not an order
3. **All Work, No Play**: Avoid turning it into a training session
4. **Ignoring Inclusivity**: Ensure everyone can participate somehow
5. **Poor Communication**: People should know what to expect
6. **No Follow-Through**: Don't let the event become forgotten

### Why Turf 360 for Corporate Events

Turf 360 is designed for successful corporate events:

- **Multiple Sports**: Football, cricket, pickleball, snooker - something for everyone
- **Professional Facilities**: Quality surfaces and equipment
- **On-Site Cafe**: Brew N Play for refreshments and team meals
- **Flexible Booking**: Customizable packages for different group sizes
- **Experienced Staff**: Help with event coordination
- **Great Location**: Easy access from across Noida NCR

### Corporate Package Inclusions

Typical corporate event packages include:
- Reserved playing areas
- Equipment provision
- Basic event coordination
- Refreshment options
- Changing facilities
- Flexible timing

---

A well-planned corporate team building event delivers ROI beyond the day itself. The connections formed, the stories shared, and the positive associations created continue to benefit team dynamics long after everyone returns to the office.

Contact Turf 360 to discuss your corporate event requirements and create an experience your team will remember.
    `,
    category: 'Events',
    tags: ['corporate events', 'team building', 'company outing', 'event planning', 'group activities'],
    featuredImage: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    authorId: 'yash-kuntal',
    publishDate: '2026-01-15',
    readTime: 11,
  },
];

export const getAuthorById = (id: string): Author | undefined => {
  return authors.find(author => author.id === id);
};

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getBlogPostsByCategory = (category: string): BlogPost[] => {
  if (category === 'All') return blogPosts;
  return blogPosts.filter(post => post.category === category);
};

export const getRelatedPosts = (currentPostId: string, limit: number = 3): BlogPost[] => {
  const currentPost = blogPosts.find(post => post.id === currentPostId);
  if (!currentPost) return blogPosts.slice(0, limit);

  return blogPosts
    .filter(post => post.id !== currentPostId && post.category === currentPost.category)
    .slice(0, limit);
};

export const categories = ['All', 'Sports Tips', 'Health & Fitness', 'Local Guide', 'Events'];
