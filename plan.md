01-prd.md
Markdown

# Product Requirement Document Prompt

Using the Master Project Context,

Create a complete Product Requirement Document (PRD) for a premium personal portfolio website for Anoop Kumar.

This is not a generic portfolio.
This is a cinematic, product-grade, presentation-like experience that should feel closer to a high-end digital keynote than a traditional developer website.

Write it like a document produced by Apple, Vercel, Linear, or a world-class product team.

The website should communicate one central philosophy:

> A great engineer is not someone who knows the most technologies.
> A great engineer understands how to combine different technologies to solve real-world problems.

The portfolio must feel intentional, elegant, calm, premium, and deeply crafted.

The hero section must emotionally center around this exact quote:

> "Jack of all trades, master of none, but oftentimes better than a master of one."

Do not shorten it.
Do not paraphrase it.
Do not treat it like supporting text.
It must be the emotional foundation of the experience.

## Core Experience Requirements

The portfolio should:

- Begin with a black screen
- Reveal the quote cinematically in large typography
- Introduce identity only after the quote completes
- Feel like an interactive keynote presentation
- Use full-screen sectioning
- Make scrolling feel like advancing through slides
- Communicate craftsmanship, systems thinking, and product ownership
- Appeal to recruiters, senior engineers, engineering managers, and startup founders
- Position the portfolio itself as the strongest project

## Writing Style

- Strategic
- Premium
- Structured
- High signal
- No filler
- No generic startup jargon
- No portfolio-template language
- No vague statements like “modern and responsive”
- Every section must feel purposeful and concrete

## Output Requirements

Target length: 10,000+ words

Output only Markdown.

If the response reaches the token limit, continue automatically from where it stopped until the document is complete.

## Include These Sections

# Executive Summary
- What the portfolio is
- Why it exists
- What makes it different
- What business/personal outcomes it should drive

# Vision
- Product vision
- Experience vision
- Emotional vision
- Brand vision
- Engineering vision

# Problem Statement
- Why most developer portfolios fail
- Why generic skill-list websites are weak
- Why this portfolio must function as a product narrative

# Goals
- Primary goals
- Secondary goals
- Non-goals

# Success Criteria
- Recruiter understanding
- Project clarity
- Brand memorability
- Time-on-site quality
- Contact conversion
- Perceived engineering maturity

# User Segments
For each:
- Technical Recruiters
- Senior Engineers
- Engineering Managers
- Startup Founders

Include:
- What they want
- What they notice
- What they need to understand quickly
- What makes them trust the portfolio

# Positioning
Define how the portfolio should position Anoop Kumar in the market.

# Core Narrative
Explain the full story arc of the website:
- curiosity
- breadth
- systems thinking
- product ownership
- execution
- confidence

# Storytelling Model
Describe the narrative structure from hero to footer as if it were a film or keynote.

# Hero Philosophy
Go deep on:
- Why the quote is central
- What emotional role it plays
- How identity reveal should work
- What the hero must make the visitor feel
- What must be avoided

# Brand Identity
Include:
- personality
- tone
- character traits
- emotional attributes
- visual attitude
- interaction attitude

# Design Principles
Define the major principles that guide every visual and UX decision.

# Color System
Include:
- primary background
- secondary background
- accent strategy
- surface hierarchy
- contrast requirements
- how subtle blue should be used
- what to avoid

# Typography System
Include:
- tone of typography
- hierarchy
- hero scale
- body scale
- contrast
- spacing philosophy
- rhythm
- how text should feel cinematic without becoming theatrical

# Layout Philosophy
Include:
- full-screen structure
- presentation-like pacing
- grid logic
- alignment discipline
- whitespace strategy
- containment rules
- content density principles

# User Journey
Map the complete user journey from landing to exit.

# Information Architecture
Define:
- what sections exist
- why they exist
- what order they appear in
- what each section must communicate
- what should not be included

# Scroll Philosophy
Explain:
- why scrolling should feel like slide progression
- what pacing should feel like
- how momentum and pause should be balanced
- how transitions should support meaning

# Motion Philosophy
Include:
- motion principles
- timing principles
- reveal philosophy
- transition behavior
- emphasis rules
- restraint rules
- what counts as “premium motion”
- what should never be animated

# Interaction Philosophy
Include:
- hover behavior
- CTA behavior
- cursor behavior
- micro-interaction rules
- user control versus guided experience

# 3D Philosophy
Explain exactly how React Three Fiber should be used sparingly and purposefully.

# Section-by-Section Product Intent
For:
- Hero
- About
- Skills
- Journey
- Projects
- Contact
- Footer

For each include:
- role in the story
- user takeaway
- emotional role
- content priorities
- what must be avoided

# Content Strategy
Define:
- voice and tone
- writing rules
- headline rules
- project copy rules
- microcopy rules
- CTA rules

# Accessibility Principles
Include:
- keyboard navigation
- reduced motion support
- contrast
- semantic structure
- screen reader expectations
- focus handling
- scroll accessibility
- motion alternatives

# Performance Goals
Set explicit goals for:
- LCP
- CLS
- TTI
- FPS during animation
- bundle discipline
- image loading
- font loading
- hydration control

# SEO and Metadata Strategy
Include:
- search positioning
- metadata hierarchy
- social sharing previews
- semantic relevance
- structured content strategy

# Technical Experience Expectations
Describe what senior engineers should infer from experiencing this portfolio.

# Risks and Failure Modes
List what would weaken the website:
- over-animation
- generic cards
- overuse of 3D
- weak project storytelling
- too many technologies listed
- performance regressions
- cluttered UI

# Final Product Standard
Define what “prime god-level” quality means for this project.

# Acceptance Criteria
Provide a final, measurable acceptance framework for the entire portfolio.
02-technical-architecture.md
Markdown

# Technical Architecture Prompt

Using the Master Project Context,

Create the complete Technical Architecture document for Anoop Kumar’s premium portfolio website.

Write as if you are a Staff Frontend Engineer designing a production-grade, award-level, high-performance interactive experience.

This is not a generic website architecture.
This architecture must support a cinematic, presentation-style, full-screen storytelling portfolio built with modern frontend engineering standards.

The architecture must reflect:
- elegance
- maintainability
- scalability
- performance
- accessibility
- animation discipline
- clean separation of concerns

The portfolio should be built as a serious product, not a template site.

## Product Characteristics

The website behaves like an interactive keynote.

The user should feel like each scroll advances the narrative.

The experience should support:
- full-screen slides/sections
- cinematic hero reveal
- high-end motion
- subtle scroll orchestration
- sparse and intentional 3D
- premium interaction quality
- strong mobile behavior
- high accessibility standards
- excellent real-world performance

## Technical Stack Assumptions

Base the architecture on:
- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- GSAP
- ScrollTrigger
- Lenis
- React Three Fiber
- Framer Motion only if explicitly justified
- Zustand only if justified
- shadcn/ui only if selectively useful, not as a design crutch

Use modern best practices.
Avoid architecture bloat.

## Output Requirements

Target length: 12,000+ words

Output Markdown only.

If the response reaches the token limit, continue automatically until complete.

## Include These Sections

# Executive Overview
- technical intent
- architectural philosophy
- why this system is structured the way it is

# Engineering Principles
Define the technical principles that govern the codebase.

# System Architecture Overview
Provide a top-down map of the full application.

# Application Model
Explain whether the portfolio should be:
- mostly static
- partially dynamic
- hybrid rendered
- edge/cache optimized

Justify every decision.

# Next.js App Router Strategy
Include:
- route model
- layout architecture
- nested layout decisions
- server/client boundaries
- loading behavior
- metadata strategy
- route-level concerns

# Folder Structure
Provide a complete recommended folder structure.

Include:
- app
- components
- features
- sections/slides
- animations
- hooks
- lib
- providers
- styles
- content
- config
- types
- assets
- public
- tests

For each folder explain:
- purpose
- allowed contents
- naming rules
- import rules

# Architectural Boundaries
Define:
- global components
- section-level components
- animation primitives
- utility layers
- content layers
- rendering boundaries

# Component Architecture
Include:
- atomic boundaries
- section composition
- reusable primitives
- presentational vs orchestration components
- where motion logic should live
- where business/content logic should live

# Slide/Section Architecture
Since the site behaves like slides, define:
- what a slide is
- how slides are registered
- full-screen behavior
- transition ownership
- section isolation
- shared patterns

# State Management Strategy
Define:
- what should use React state
- what should use refs
- what should use context
- whether Zustand is needed
- what absolutely should not become global state

# Providers Architecture
Include:
- theme provider
- motion provider
- scroll provider
- accessibility provider
- reduced motion detection
- analytics provider if needed

# Styling Architecture
Define the styling system in detail:
- Tailwind strategy
- utility-first rules
- component styling rules
- token usage
- class variance approach if used
- avoiding style drift

# CSS Variable System
Specify:
- color tokens
- spacing tokens
- radius tokens
- blur tokens
- z-index tokens
- transition tokens
- typography tokens
- section-level variables
- adaptive variables for theme/motion states

# Theme Architecture
Define:
- dark-first implementation
- possible future theming
- how theme values should be centralized
- how accent color should be controlled

# TypeScript Rules
Include:
- strict mode expectations
- prop typing rules
- shared type strategy
- utility type usage
- generics discipline
- no-any policy
- naming conventions
- event typing
- animation config typing

# Content Architecture
Define how textual content, project data, metadata, and labels are stored.

Include:
- constants
- JSON/TS data
- MDX if applicable
- whether project details should be content-driven
- how to preserve maintainability

# Asset Pipeline
Include:
- images
- videos
- SVGs
- icons
- fonts
- 3D assets
- Lottie if allowed
- compression strategy
- optimization rules
- loading priorities

# Font Strategy
Include:
- likely font pairing
- variable font usage
- preload rules
- fallback stacks
- optical sizing
- avoiding layout shift

# Image Strategy
Include:
- Next Image usage
- dimensions discipline
- art direction
- responsive loading
- quality tradeoffs
- decoding strategy

# Motion Architecture
Define:
- animation layering
- declarative vs imperative boundaries
- what GSAP controls
- what CSS handles
- what should never be animated with JS
- timeline ownership model

# GSAP Architecture
Include:
- utility wrappers
- timeline organization
- cleanup patterns
- scope management
- context usage
- dependency rules
- sequencing logic
- debugging strategy

# ScrollTrigger Architecture
Include:
- trigger ownership
- pinning rules
- scrub rules
- refresh strategy
- media query adaptation
- accessibility concerns
- avoiding layout bugs

# Lenis Architecture
Explain:
- why Lenis is used
- how it integrates with RAF
- how it works with GSAP
- how to prevent scroll conflicts
- how to disable/modify behavior in reduced-motion or mobile scenarios

# Master Scroll Engine Integration
Explain the interaction between:
- Lenis
- GSAP
- ScrollTrigger
- slide system
- progress indicator
- active section detection
- navigation sync

# React Three Fiber Architecture
Include:
- where it should live
- isolation boundaries
- suspense usage
- lazy loading
- performance budget
- interaction rules
- how to keep it subtle and premium

# Performance Architecture
Set explicit engineering strategy for:
- bundle splitting
- dynamic imports
- route-level loading
- hydration minimization
- animation performance
- re-render prevention
- memoization discipline
- RAF coordination
- GPU-safe transforms

# Accessibility Architecture
Include:
- semantic layout
- heading hierarchy
- keyboard model
- skip links
- focus restoration
- reduced motion adaptation
- screen reader strategy
- announcing navigation/section changes if appropriate

# SEO and Metadata Architecture
Include:
- metadata generation
- Open Graph
- Twitter cards
- canonical URLs
- robots
- sitemap
- structured data if useful
- semantic sectioning

# Analytics Architecture
If analytics are used, define:
- events worth tracking
- what not to track
- privacy-friendly options
- performance-safe instrumentation

# Error Handling and Resilience
Include:
- animation failure fallback
- no-JS graceful behavior
- asset failure behavior
- section degradation strategy
- 3D fallback strategy

# Testing Strategy
Include:
- unit tests
- integration tests
- interaction tests
- accessibility audits
- visual regression
- performance checks
- manual animation QA

# Deployment Architecture
Include:
- Vercel deployment model
- preview environments
- environment variables
- caching
- headers
- compression
- image optimization
- monitoring

# Maintainability Strategy
Explain how to keep the codebase clean over time.

# Security and Hardening
Even if minimal, include:
- dependency discipline
- CSP considerations
- external asset controls
- form endpoint safety
- spam prevention

# Final Recommended Stack
Provide a final opinionated architecture summary.

# Acceptance Criteria
Provide concrete acceptance criteria for the full technical system.
03-scroll-engine-spec.md
Markdown

# Scroll Engine Specification Prompt

Using the Master Project Context,

Create the complete Scroll Engine Specification for Anoop Kumar’s portfolio.

This document should define the entire scrolling system as if it were a product subsystem, not a visual afterthought.

The portfolio should feel like an interactive keynote presentation.

Scrolling should not feel like browsing a normal webpage.
It should feel like advancing through carefully paced slides.

The scroll engine must support:
- cinematic section progression
- full-screen sections
- navigation synchronization
- active section awareness
- premium transitions
- excellent mobile behavior
- reduced motion accessibility
- smooth but controlled momentum
- high performance

Write this as a systems-level engineering specification.

## Output Requirements

Target length: 10,000+ words

Output Markdown only.

If the response reaches the token limit, continue automatically until complete.

## Mandatory Structure

For every major chapter include:

- Objective
- Architecture
- Implementation
- Acceptance Criteria

## Include These Chapters

# Executive Summary
Explain what the scroll engine is and why it matters.

# Scroll Philosophy
Cover:
- why scroll is the storytelling engine
- why this experience must feel like slide progression
- pacing philosophy
- pause and momentum philosophy
- emotional role of scroll
- what “premium scroll” means
- what must be avoided

# Experience Model
Define the relationship between:
- viewport
- sections
- transition windows
- pinned states
- free-scroll moments
- user control
- guided narrative

# Lenis Architecture
Include:
- why Lenis is selected
- RAF loop ownership
- integration with React lifecycle
- smoothing strategy
- delta handling
- touch behavior
- wheel behavior
- mobile adaptation
- reduced motion adaptation
- cleanup strategy

# GSAP Integration
Explain how GSAP should cooperate with the scroll engine.

# ScrollTrigger Architecture
Include:
- trigger registration model
- pinning strategy
- section observation
- scrub usage rules
- start and end discipline
- refresh behavior
- responsive recalculation
- nested trigger safety

# Master Timeline
Define:
- whether a global master timeline should exist
- what it controls
- what it must not control
- how local timelines relate to it
- orchestration boundaries
- debugging strategy

# Slide Registration System
Include:
- how each slide is identified
- indexing rules
- metadata for each slide
- activation thresholds
- registration lifecycle
- dynamic safety considerations

# Active Slide Detection
Define:
- how current slide is determined
- threshold rules
- overlap handling
- edge cases
- fast-scroll behavior
- mobile inconsistencies
- observer vs trigger approaches

# Progress Bar System
Include:
- what progress means
- page progress vs slide progress
- synchronization
- display logic
- accessibility
- animation behavior
- update performance

# Navigation Sync
Define:
- top navigation awareness
- active state switching
- click-to-section behavior
- scroll-to-section logic
- route sync if single-page
- deep linking strategy if any

# Pinning Strategy
Include:
- when to pin
- when not to pin
- hero pinning
- project section pinning
- over-pinning risks
- mobile pinning adaptations
- layout shift prevention

# Transition Rules
Define:
- enter transitions
- exit transitions
- cross-section transitions
- typography transitions
- panel transitions
- image transitions
- progress continuity
- interruption behavior

# Section Timing Model
Include:
- minimum readable time
- pacing by section importance
- long-content management
- sequencing rules
- reveal order

# Hero Scroll Behavior
This chapter must go deep on:
- initial black screen
- quote reveal timing
- identity reveal timing
- scroll lock vs passive progression
- CTA appearance
- first transition into next slide

# About Slide Scroll Behavior
Define how information enters, rests, and exits.

# Skills Slide Scroll Behavior
Define how skills should be revealed without looking like a generic grid.

# Journey Slide Scroll Behavior
Define how experience/timeline should progress like a narrative, not a resume.

# Projects Slide Scroll Behavior
Include:
- project sequencing
- project focus transitions
- image/text choreography
- detail density management
- avoiding carousel-like weakness

# Contact Slide Scroll Behavior
Define the final interaction pacing and emotional landing.

# Footer Transition Behavior
Explain how the end of the experience should feel.

# Mobile Behavior
This chapter is critical.
Include:
- touch scroll differences
- reduced animation intensity
- pinning fallbacks
- viewport height instability
- performance constraints
- accessibility concerns
- preserving premium feel without desktop mechanics

# Accessibility
Include:
- reduced motion
- keyboard navigation
- focus management
- skip mechanisms
- semantic fallback
- screen reader expectations
- non-scroll access to content

# Performance
Include:
- ScrollTrigger count management
- repaint discipline
- transform-only guidance
- RAF coordination
- avoiding synchronous layout reads
- teardown rules
- memory safety

# Failure Modes
List:
- jank
- over-scrubbing
- trigger conflicts
- focus traps
- broken mobile viewport behavior
- desynced nav
- animation dead zones

# Debugging and Instrumentation
Include:
- debug overlays
- active section logging
- trigger markers strategy in dev
- QA checklist

# Final Scroll Standard
Define what success looks like for this scroll engine.

# Acceptance Criteria
Provide measurable acceptance criteria for the entire subsystem.
04-ui-design-system.md
Markdown

# UI Design System Prompt

Using the Master Project Context,

Create the complete UI Design System for Anoop Kumar’s premium portfolio website.

This is not a generic component styling guide.
This must define a world-class visual system for a dark, cinematic, premium, presentation-style portfolio.

The portfolio should feel inspired by the restraint and quality of:
- Apple
- Linear
- Vercel
- Raycast
- Figma

But it must not imitate them directly.

It should feel like a refined, luxurious, intentional product interface built specifically for a full stack engineer who understands systems, product thinking, and execution.

## Design Character

The interface must feel:
- premium
- calm
- cinematic
- intelligent
- restrained
- modern
- elegant
- highly legible
- immersive without excess

## Output Requirements

Target length: 12,000+ words

Output Markdown only.

If the response reaches the token limit, continue automatically until finished.

## Include These Sections

# Executive Summary
Define the purpose and role of the design system.

# Brand-to-UI Translation
Explain how the product philosophy translates into interface behavior and appearance.

# Design Principles
List and explain the core UI principles.

# Color System
Include:
- primary background
- secondary background
- tertiary surface
- border colors
- accent blue
- text hierarchy
- muted text
- success/warning/error if needed
- glass treatment colors
- contrast standards
- usage rules
- what to avoid

# Typography System
Include:
- type personality
- heading system
- display typography
- body sizes
- caption sizes
- line-height rules
- tracking rules
- hero typography behavior
- responsive typography scaling
- cinematic text composition
- readability rules

# Spacing System
Include:
- base unit
- section spacing
- internal spacing
- text spacing
- stack rhythm
- full-screen composition spacing
- mobile spacing adaptation

# Grid and Layout System
Include:
- layout widths
- alignment rules
- column concepts
- full-screen section logic
- safe zones
- content containment
- asymmetry rules if any
- visual balance rules

# Elevation and Surface System
Include:
- dark surfaces
- glass panels
- translucency
- blur
- border glow
- depth hierarchy
- panel layering rules

# Radius System
Define corner treatment philosophy and exact usage logic.

# Iconography
Include:
- style direction
- stroke rules
- sizes
- motion behavior
- when to use icons
- when not to use icons

# Navigation
Define:
- visual style
- transparency behavior
- active state
- section awareness
- mobile nav behavior
- scroll-aware behavior
- accessibility
- animation rules

# Buttons
Include:
- primary button
- secondary button
- ghost button
- inline CTA
- magnetic behavior if any
- hover/focus/pressed/disabled states
- sizing system
- icon pairing
- motion rules

# Cards
Define:
- purpose
- card types
- information density
- hover behavior
- glass vs solid treatment
- project card rules
- anti-patterns

# Hero
This section must go deep on:
- quote presentation
- scale
- line breaks
- spacing
- identity reveal
- CTA styling
- emotional visual hierarchy

# Skills
Define a non-generic skills presentation system.
Avoid logo soup.
Avoid resume-style badges.

# Timeline / Journey
Define how the experience/timeline section should look and behave visually.

# Projects
Include:
- project presentation model
- preview media treatment
- text hierarchy
- case-study framing
- emphasis rules
- sequencing
- hover and selection behavior

# Footer
Define the footer as a closing frame, not a standard website footer.

# Contact
Include:
- tone
- form style if any
- direct contact options
- hierarchy
- CTA treatment
- trust signals

# Forms
Define:
- fields
- labels
- placeholders
- validation states
- focus states
- accessibility
- motion rules
- anti-patterns

# Glass Panels
This is important.
Define:
- when to use them
- when not to use them
- blur intensity
- border treatment
- opacity ranges
- layering
- readability safeguards

# Cursor
If a custom cursor exists:
- define purpose
- behavior
- restraint rules
- accessibility fallback
- when to disable

# Loading States
Include:
- initial load
- hero pre-reveal state
- asset loading behavior
- skeleton philosophy if any
- transition into ready state

# Responsive Design
Include:
- desktop philosophy
- tablet adaptation
- mobile adaptation
- preserving the cinematic experience on smaller screens
- simplification rules

# Accessibility
Include:
- contrast
- focus visibility
- readable sizes
- touch target sizing
- reduced motion implications
- semantic consistency

# Animation Rules
Define animation behavior at the design system level:
- timing ranges
- easing categories
- hierarchy of motion
- hover timings
- reveal timings
- panel transitions
- what should remain static

# Copy Presentation Rules
Include:
- headline length guidance
- multiline text composition
- paragraph width rules
- emphasis usage
- punctuation tone

# Anti-Patterns
List UI choices that must be avoided.

# Acceptance Criteria
Provide measurable design-system acceptance criteria.
05-slide-specification.md
Markdown

# Slide Specification Prompt

Using the Master Project Context,

Create a complete Slide Specification document for Anoop Kumar’s premium portfolio website.

Treat every major section like a presentation slide, not a normal web section.

The website should behave like an interactive keynote.

Each slide must feel immersive, deliberate, and emotionally sequenced.

Slides to cover:

- Hero
- About
- Skills
- Journey
- Projects
- Contact
- Footer

This document must be deeply implementation-aware while still preserving design and narrative intent.

## Output Requirements

Target length: 15,000+ words

Output Markdown only.

If the response reaches the token limit, continue automatically until finished.

## Mandatory Structure

For EVERY slide include:

- Objective
- Layout
- Wireframe
- Typography
- Spacing
- Visual Hierarchy
- Animations
- Timeline
- Interactions
- Responsive
- Accessibility
- Performance
- Folder Structure
- Component Tree
- Acceptance Criteria
- AI Implementation Notes

## Global Intro Sections

Before the slide-by-slide breakdown, include:

# Executive Summary
Explain what a “slide” means in this project.

# Slide Philosophy
Define:
- narrative role
- pacing role
- full-screen behavior
- transition philosophy
- composition philosophy
- what makes a slide feel premium

# Slide Architecture Model
Define common structure:
- wrapper
- content container
- background layer
- motion layer
- media layer
- interaction layer
- progressive reveal layer

# Global Slide Rules
Include:
- viewport fit strategy
- section min-height rules
- alignment logic
- spacing consistency
- animation sequencing
- responsive collapse rules
- reduced motion adaptation

---

## Slide 1: Hero

This is the most important slide.

Requirements:
- Begin on a nearly black screen
- The quote appears gradually
- Large cinematic typography
- Elegant line-by-line reveal
- Identity appears only after the quote resolves
- Identity example:
  - Anoop Kumar
  - Full Stack Engineer
  - Building products, not just applications.
- Subtle invitation to continue

Go deep on:
- typography scale
- line breaking strategy
- timing pacing
- emotional pacing
- motion sequencing
- 3D/particle role if any
- CTA placement
- black-space composition
- transition into About slide

---

## Slide 2: About

Requirements:
- Explain who Anoop is beyond a list of skills
- Frame breadth as systems thinking, not distraction
- Build trust quickly
- Maintain premium restraint

Include:
- content model
- ideal sentence rhythm
- visual treatment
- supporting proof elements
- transition from emotional hero to rational identity

---

## Slide 3: Skills

Requirements:
- Avoid generic logo grid
- Avoid “I know everything” impression
- Show how technologies work together
- Emphasize systems, architecture, and product execution

Include:
- possible layout concepts
- interaction model
- hierarchy between core stack and secondary tools
- motion rules
- visual metaphors if any
- 3D usage if justified

---

## Slide 4: Journey

Requirements:
- Present career/learning evolution like a narrative
- Avoid resume formatting
- Show progression, curiosity, and increasing product ownership

Include:
- timeline model
- pacing
- reveal sequence
- content density
- mobile strategy
- visual anchors

---

## Slide 5: Projects

This is one of the most important slides.

Requirements:
- The portfolio itself is a proof of quality
- Projects must feel selective, premium, and well framed
- Show product understanding, not only tech stack
- Emphasize problem, system design, execution, and outcome

Include:
- project card model
- featured project behavior
- transitions between projects
- media hierarchy
- supporting metadata
- CTA structure
- deep-link handling if relevant
- how to avoid clutter

---

## Slide 6: Contact

Requirements:
- Close confidently
- Invite conversation, not desperation
- Feel direct, premium, and calm
- Make outreach effortless

Include:
- layout options
- message hierarchy
- CTA treatment
- form vs direct contact decision
- trust and clarity cues

---

## Slide 7: Footer

Requirements:
- The footer should feel like the final frame of the presentation
- It should not feel like a utility dump
- It should provide closure

Include:
- emotional role
- minimal content strategy
- final visual state
- how the experience lands

---

## For Every Slide, Go Deep On

# Objective
What the slide must accomplish.

# Layout
Exact layout structure and spatial logic.

# Wireframe
Describe the wireframe in text form with alignment and proportions.

# Typography
Display sizes, hierarchy, line lengths, rhythm.

# Spacing
Top/bottom safe zones, internal spacing, mobile adaptations.

# Visual Hierarchy
Primary, secondary, tertiary emphasis.

# Animations
Entry, dwell, and exit animation strategy.

# Timeline
Precise reveal order and pacing logic.

# Interactions
Hover, scroll, click, keyboard interactions.

# Responsive
Desktop, tablet, mobile adaptation rules.

# Accessibility
Semantic structure, reading order, focus, reduced motion.

# Performance
Asset and animation constraints.

# Folder Structure
How the slide should live in the codebase.

# Component Tree
Suggested component decomposition.

# Acceptance Criteria
Concrete checks for success.

# AI Implementation Notes
Instructions an AI code generator should follow when building the slide.

## Final Closing Section

Add:
- Cross-slide consistency rules
- Transition harmony rules
- Common failure modes
- Final quality bar for a “prime god-level” portfolio
06-animation-library.md
Markdown

# Animation Library Prompt

Using the Master Project Context,

Create the complete Animation Library for Anoop Kumar’s premium portfolio website.

This should define a full motion system for a dark, cinematic, presentation-style portfolio.

Motion must feel:
- elegant
- smooth
- purposeful
- minimal
- premium
- restrained

Avoid flashy interactions.
Avoid trendy over-animation.
Avoid motion that competes with meaning.

This is a product-grade animation system, not a random collection of effects.

## Output Requirements

Target length: 8,000+ words

Output Markdown only.

If the response reaches the token limit, continue automatically until finished.

## Include These Sections

# Executive Summary
Define the role of animation in this project.

# Motion Philosophy
Include:
- why motion exists
- what motion should communicate
- pacing principles
- elegance vs spectacle
- user guidance
- premium motion characteristics
- restraint rules

# Motion Tokens
Define:
- durations
- easing families
- stagger rules
- opacity rules
- blur ranges
- scale ranges
- transform distances
- hover timings
- transition categories

# Global Animation Rules
Include:
- transform-first policy
- opacity discipline
- blur discipline
- sequencing logic
- avoiding animation overload
- layout animation limits
- mobile simplification
- reduced motion handling

## For Every Animation Type Include

- Purpose
- When to use
- When not to use
- Duration
- Ease
- Trigger type
- Layering notes
- Performance considerations
- Accessibility considerations
- Code examples

## Animation Types To Cover

# Fade
Simple fade rules, combinations, and anti-patterns.

# Blur
How blur should be used sparingly to create premium reveal depth.

# Slide
Directional motion rules:
- vertical
- horizontal
- micro-offset
- entrance vs exit

# Scale
Subtle scale behavior for emphasis and hover.

# Counter
If counters are used at all, define a restrained system.

# Text Reveal
This is critical.
Include:
- line reveal
- word reveal
- mask reveal
- opacity reveal
- hero quote sequencing
- identity reveal sequencing
- readability safeguards

# Panel Transition
For glass panels, cards, overlays, and section surfaces.

# Hover
Include:
- text hover
- card hover
- icon hover
- CTA hover
- magnetic nuance if allowed

# Magnetic Buttons
If used, define strict restraint and fallback behavior.

# Cursor
If a custom cursor exists:
- motion rules
- latency constraints
- disabled conditions
- accessibility fallback

# Particles
If hero particles exist:
- density limits
- motion speed
- opacity ranges
- interaction rules
- CPU/GPU budget
- graceful degradation

# Loading
Include:
- initial page load
- intro readiness
- content reveal
- route-free single page loading approach
- anti-patterns

# Scroll-Linked Animation
Include:
- scrub logic
- section transitions
- progress-linked effects
- limitations

# Emphasis Animation
For bringing attention to key phrases or proof points.

# Navigation Animation
Active-state shifts, underline/glow behavior, reveal timing.

# Modal / Overlay Animation
If overlays exist, define entry/exit behavior.

# 3D Motion Coordination
How 3D movement should coordinate with 2D interface motion.

# Reduced Motion Strategy
Critical section.
Define:
- alternatives
- what gets removed
- what becomes instantaneous
- what remains

# Performance Strategy
Include:
- GSAP best practices
- will-change discipline
- batching
- cleanup
- avoiding layout thrash
- avoiding expensive filters

# Code Organization
Define:
- animation utility foldering
- reusable timelines
- tokenized configs
- naming conventions

# Final Motion Quality Standard
Define what “prime god-level” motion means for this website.

# Acceptance Criteria
Provide measurable success criteria for the animation library.
07-component-library.md
Markdown

# Component Library Prompt

Using the Master Project Context,

Create the complete Component Library for Anoop Kumar’s premium portfolio website.

This should be a product-grade component specification, not a generic UI inventory.

The component system must support:
- dark premium visuals
- full-screen slide storytelling
- elegant motion
- accessibility
- maintainability
- high performance
- visual consistency
- clean engineering boundaries

Write with the quality of an elite design systems and frontend engineering document.

## Output Requirements

Output Markdown only.

If the response reaches the token limit, continue automatically until complete.

## Global Intro Sections

Before component-by-component sections, include:

# Executive Summary
What the component library is and why it matters.

# Component Philosophy
Include:
- composition over bloating
- premium restraint
- token-driven styling
- accessibility-first behavior
- motion consistency
- reuse strategy
- section-aware composition

# Component Architecture Rules
Include:
- naming conventions
- variant rules
- prop design philosophy
- composition boundaries
- animation ownership
- state ownership
- folder conventions

# Styling Rules
Explain:
- Tailwind conventions
- class organization
- token usage
- glass treatment usage
- dark mode consistency
- responsive philosophy

# Accessibility Rules
Global accessibility standards for all components.

# Performance Rules
Global performance guidance for all components.

## For Every Component Include

- Purpose
- Props
- Variants
- States
- Animations
- Responsive Behavior
- Accessibility
- Folder Structure
- Code Examples
- Acceptance Criteria

## Components To Cover

# Button
Include:
- primary
- secondary
- ghost
- inline
- icon support
- CTA behavior

# Card
Include:
- project card
- info card
- stat/feature card if used
- hover states
- glass vs solid use cases

# Glass Panel
This is important.
Include:
- purpose
- opacity rules
- blur rules
- border rules
- layering guidance
- readability safeguards

# Heading
Include:
- display
- section
- eyebrow
- supporting text
- multiline handling

# Section
Define the base full-screen section wrapper.

# Timeline
Define the journey/timeline component system.

# Navbar
Include:
- active slide sync
- transparent/default/scrolled states
- mobile adaptation
- CTA area
- reduced motion behavior

# Hero
Define the hero as a component system:
- quote lines
- identity block
- reveal sequencing
- CTA
- background treatment

# Skills
Define a custom skills visualization component system that avoids generic grids.

# Project Card
Go deeper than generic cards:
- media area
- summary
- role
- tech relation
- CTA
- hover behavior
- featured vs compact variants

# Footer
Define the final closure component.

# Modal
Only if justified.
Include:
- when to use
- when not to use
- accessibility
- motion
- focus trapping

# Command Palette
Only if justified.
If included, explain why it strengthens the premium experience.
If not justified, explicitly say it should be excluded.

# Progress Indicator
Include:
- page progress
- slide progress
- nav sync
- accessibility

# Forms
Include:
- input
- textarea
- label
- message
- validation
- submit feedback

## For Code Examples

Provide concise implementation examples where helpful, but do not turn the response into a raw code dump.
Examples should clarify API design and component structure.

## Final Sections

# Composition Patterns
Show how components combine at section level.

# Anti-Patterns
List what must be avoided in this component system.

# Final Quality Standard
Define what makes this library feel elite and product-grade.

# Acceptance Criteria
Provide measurable acceptance criteria for the entire component library.
08-ai-coding-rules.md
Markdown

# AI Coding Rules Prompt

Using the Master Project Context,

Create the complete AI Coding Rules document for Anoop Kumar’s premium portfolio website.

This document should function as the definitive instruction manual for any AI model contributing code to the project.

It must ensure that all generated code stays aligned with the product vision:
a premium, cinematic, dark, presentation-style, highly engineered personal portfolio.

This is not a generic coding style guide.
It must include rules that preserve:
- storytelling quality
- architecture quality
- motion discipline
- accessibility
- performance
- maintainability
- product-level polish

The AI must never generate template portfolio code.

## Output Requirements

Target length: 8,000+ words

Output Markdown only.

If the response reaches the token limit, continue automatically until finished.

## Include These Sections

# Executive Summary
Explain what this document is and how it should be used.

# Core Product Context
Restate the most important truths of the project that every AI must obey.

Include:
- this is not a generic portfolio
- hero quote is sacred
- storytelling-first architecture
- slide-based experience
- premium restraint
- technology should be framed as systems thinking
- performance and accessibility are mandatory

# AI Behavioral Rules
Include:
- never invent generic sections
- never add features without narrative purpose
- never over-design
- never over-animate
- never create visual clutter
- never use resume-site patterns by default
- always justify complexity

# Folder Conventions
Define:
- how files are organized
- where sections live
- where components live
- where animations live
- where utilities live
- where content lives
- where providers live
- where types live

# Naming Conventions
Include:
- component names
- hook names
- utility names
- file names
- folder names
- animation function names
- constants
- types/interfaces

# Import Rules
Include:
- import ordering
- absolute imports vs relative imports
- barrel file policy
- circular dependency avoidance
- side-effect import restrictions

# React Rules
Define:
- server vs client boundaries
- component purity
- hook usage
- ref usage
- memoization discipline
- composition rules
- prop design
- children usage
- render safety
- no giant components

# Next.js Rules
Include:
- App Router patterns
- metadata usage
- layout usage
- dynamic import discipline
- image usage
- font usage
- client bundle protection
- route strategy
- SEO alignment

# TypeScript Rules
Include:
- strict typing
- no any
- interface vs type guidance
- union usage
- discriminated unions
- prop typing
- event typing
- utility types
- inference discipline
- explicit return types where useful

# Tailwind Rules
Include:
- token-driven usage
- class organization
- no arbitrary chaos
- extracting repeated patterns
- responsive class strategy
- state styling
- data attributes if useful
- dark theme consistency

# CSS Variable Rules
Define:
- what must be a token
- naming conventions
- semantic token usage
- avoiding hardcoded drift

# Animation Rules
This must be detailed.
Include:
- GSAP ownership
- ScrollTrigger rules
- Lenis interaction
- transform-only preference
- opacity/blur discipline
- animation cleanup
- timeline naming
- reduced motion handling
- what should never be animated

# Scroll Rules
Include:
- slide-based logic
- trigger boundaries
- pinning caution
- nav sync
- active section sync
- mobile simplification

# Accessibility Rules
Include:
- semantic elements
- heading order
- focus management
- keyboard operability
- reduced motion
- aria usage
- screen reader considerations
- contrast requirements
- touch targets

# Performance Rules
Include:
- bundle discipline
- lazy loading
- image optimization
- font optimization
- avoiding re-renders
- avoiding expensive effects
- RAF safety
- 3D budget limits
- hydration discipline

# React Three Fiber Rules
Include:
- when it is allowed
- when it is not allowed
- scene complexity limits
- fallback requirements
- lazy loading
- user interaction restraint

# Content Rules
Include:
- no generic bio text
- no buzzword stuffing
- no shallow project descriptions
- preserve tone
- preserve philosophy
- write concise, premium copy

# Project Section Rules
Define how AI should generate project cards and descriptions.

# Responsive Rules
Include:
- desktop-first vs mobile adaptation logic
- simplification strategy
- preserving hierarchy across breakpoints

# Testing Rules
Include:
- what should be tested
- accessibility checks
- motion QA
- performance validation
- visual regression expectations

# Refactoring Rules
Include:
- when AI should refactor
- how to preserve behavior
- how to reduce complexity safely

# Forbidden Patterns
List concrete things AI must never generate.

Examples:
- giant all-in-one page components
- generic floating blobs everywhere
- overuse of gradients
- meaningless counters
- random tech badges
- noisy hover effects
- inaccessible custom scroll behavior
- excessive fixed backgrounds

# Output Format Rules
Define how AI should present code:
- complete files vs diffs
- when to explain
- when to summarize
- how to handle assumptions
- how to flag uncertainty

# Review Checklist
Create a pre-delivery checklist an AI must mentally run before returning code.

# Final Standard
Define what “prime god-level” implementation quality means.

# Acceptance Criteria
Provide measurable acceptance criteria for the AI coding rules document.
Recommended file names
Markdown

01-prd.md
02-technical-architecture.md
03-scroll-engine-spec.md
04-ui-design-system.md
05-slide-specification.md
06-animation-library.md
07-component-library.md
08-ai-coding-rules.md
Best way to use them
Use them in this order:

01-prd.md
02-technical-architecture.md
03-scroll-engine-spec.md
04-ui-design-system.md
05-slide-specification.md
06-animation-library.md
07-component-library.md
08-ai-coding-rules.md
Strong recommendation
Before using any of these 8 prompts, prepend your Master Project Context Prompt first.

That way every generated document stays aligned with:

cinematic storytelling
premium dark visual language
keynote-style full-screen flow
engineering maturity
non-generic portfolio positioning