# Framework Evaluation: React vs Angular

A balanced assessment to help the team choose the right approach for our projects.

---

## Executive Summary

We're evaluating whether to standardise on React or Angular for frontend development. Both are production-ready frameworks with strong ecosystems. This document presents an honest comparison to support an informed team decision.

**Key considerations:**
- We have Angular projects at partial completion
- Both frameworks support mobile via Capacitor
- The "right" choice depends on our specific context, not industry trends
- Switching costs are real and must be weighed against benefits

---

## The Problems We're Solving

1. **Multiple client sites with different brands** — need consistent theming without duplicating effort
2. **Legacy PHP/Vanilla JS codebases** — teams want modern tooling
3. **Can't rebuild everything from scratch** — clients won't pay for rewrites
4. **Clients increasingly want mobile apps** — need a path that doesn't double workload

**Important:** Both React and Angular can solve these problems. The question is which fits our team better.

---

## Honest Comparison

### Side-by-Side

| Factor | Angular + Capacitor | React + Capacitor/Expo |
|--------|--------------------|-----------------------|
| **Learning curve** | Steeper initially; clearer patterns long-term | Gentler start; patterns vary by team/project |
| **Mobile path** | Ionic/Capacitor (mature, well-documented) | Capacitor or Expo (more options, more decisions) |
| **Bundle size** | Larger baseline; tree-shakes effectively | Smaller baseline; grows with dependencies |
| **Team structure** | Better for larger teams needing consistency | Better for small teams wanting flexibility |
| **Hiring** | Smaller candidate pool; often more experienced | Larger pool; varied experience levels |
| **Codebase consistency** | Enforced by framework conventions | Requires team discipline and style guides |
| **Built-in tooling** | CLI, routing, forms, HTTP, testing included | Assemble your own stack |
| **Upgrade path** | Predictable release schedule, migration guides | Frequent updates, ecosystem churn |

### Neither is Objectively Better

The comparison above isn't a scorecard—it's a list of tradeoffs. Angular's "steeper learning curve" is also "clearer long-term patterns." React's "flexibility" is also "decision overhead."

---

## When Angular Wins

Angular + Capacitor is likely the better choice when:

- **Team has Angular experience** — existing skills are an asset, not a liability
- **Projects need enforced consistency** — Angular's opinions reduce bikeshedding
- **Enterprise or long-lived apps** — stability and predictable upgrades matter
- **Larger teams** — conventions help onboarding and code reviews
- **Mobile via Capacitor is sufficient** — no need for React Native/Expo
- **Client specifically requires Angular** — common in government, finance, healthcare

**Angular's underrated strengths:**
- Dependency injection makes testing and mocking straightforward
- RxJS is powerful for complex async flows (once learned)
- Angular CLI handles scaffolding, builds, and updates consistently
- Stable API surface—less time chasing breaking changes
- Ionic + Capacitor is a mature, well-supported mobile path

---

## When React Wins

React + Capacitor/Expo is likely the better choice when:

- **Team has React experience** — or is starting fresh with no framework preference
- **Projects vary significantly** — flexibility to adopt different patterns per client
- **Native mobile is a priority** — React Native/Expo ecosystem is larger
- **Smaller teams** — less overhead from framework conventions
- **Rapid prototyping** — faster to get something running
- **Hiring from a larger pool matters** — more React developers available

**React's genuine advantages:**
- Lower barrier to entry for developers new to frameworks
- Larger ecosystem of third-party libraries
- Hooks pattern transfers directly to React Native
- More flexibility in architecture choices
- Stronger community momentum (for now)

---

## The Mobile Question

Both frameworks work with Capacitor. The mobile decision is somewhat independent of the framework choice.

| Approach | Best For | Works With |
|----------|----------|------------|
| **Capacitor** | Content apps, forms, catalogues, "website as app" | Angular or React |
| **Ionic** | Mobile-optimized UI components | Angular (primary), React, Vue |
| **React Native/Expo** | Interaction-heavy apps, native feel | React only |

**Key insight:** If Capacitor meets your mobile needs, the framework choice doesn't constrain you. React Native/Expo only matters if you need truly native mobile UX.

---

## Decision Framework

### Questions to Answer as a Team

1. **What's our current expertise?**
   - Strong Angular skills → lean Angular
   - Strong React skills → lean React
   - Mixed/none → consider learning curve and hiring

2. **What are our projects like?**
   - Large enterprise apps → Angular's structure helps
   - Varied client work → React's flexibility helps

3. **What's our mobile strategy?**
   - Capacitor sufficient → either framework works
   - Need native mobile → React has stronger path

4. **What's the cost of our current Angular investment?**
   - Rewriting 20-60% complete projects has real cost
   - Is the benefit worth that cost?

5. **Are we solving a real problem or following trends?**
   - "React is more popular" isn't a business case
   - What specific problems would switching solve?

### Decision Matrix

| Your Situation | Recommendation |
|----------------|----------------|
| Team knows Angular, Capacitor is enough | **Stay with Angular** |
| Team knows React, or starting fresh | **Use React** |
| Need React Native/Expo specifically | **Use React** |
| Large enterprise projects, big team | **Consider Angular** |
| Varied small projects, small team | **Consider React** |
| Mixed experience, no strong preference | **Evaluate further** |

---

## Addressing Our Active Angular Projects

We have projects at 20-60% completion. Options:

### Option A: Continue with Angular
- **Cost:** None (already invested)
- **Benefit:** Ship on current timeline, no context switch
- **Risk:** If we later standardize on React, these become "legacy"

### Option B: Pivot to React Now
- **Cost:** Rewrite 20-60% of work; timeline extension
- **Benefit:** Unified stack going forward
- **Risk:** Sunk cost; may not be worth it

### Option C: Finish Angular, Evaluate for Future
- **Cost:** Maintaining two frameworks short-term
- **Benefit:** No wasted work; informed decision for next project
- **Risk:** Never actually consolidating

**Honest assessment:** Pivoting mid-project is expensive. Unless there's a compelling reason specific to those projects (not just general preference), finishing them in Angular and deciding framework strategy for *new* projects may be more pragmatic.

---

## Shared Patterns (Framework-Agnostic)

Regardless of framework choice, these patterns apply:

| Pattern | Purpose |
|---------|---------|
| **Design Tokens** | Single source of truth for brand colors/spacing |
| **Shared Types** | TypeScript interfaces used across platforms |
| **API Clients** | Abstracted HTTP layer, framework-agnostic |
| **Component Structure** | Consistent layout patterns (Header, Hero, etc.) |

Both Angular and React can consume design tokens. Both can share TypeScript types. The architecture in this repo demonstrates these patterns with React, but they're transferable.

---

## What This Example Demonstrates

This repository uses React to show:
- Incremental migration from legacy PHP
- Design token system for multi-brand consistency
- Shared business logic across web and mobile
- Capacitor and Expo as mobile options

**These same principles work with Angular.** The component syntax differs, but the architecture translates.

---

## Recommendation

**There is no universal right answer.** The recommendation depends on your team's honest assessment of:

1. Current skills and expertise
2. Project types and client needs
3. Mobile requirements (Capacitor vs native)
4. Willingness to invest in learning/switching

If the team is genuinely split, consider:
- A small pilot project in each framework
- Time-boxed evaluation with clear success criteria
- Involving developers who'll actually build with the chosen stack

The worst outcome is choosing based on hype rather than fit. Both Angular and React are excellent frameworks used by large organizations to ship production software.
