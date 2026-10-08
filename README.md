# Bible Stories: Interactive Comics

This repository contains the story pages, assets, authoring tools, shared game challenges, and documentation for the Bible Stories interactive comics.

Browse the [published story index](https://purna.github.io/bible-stories/) or open a story folder below.

## Stories

- [Abraham](./Abraham/) — includes the [Tower of Babel bonus comic](./Abraham/Babel/), unlocked after all ten Abraham chapter challenges are completed.
- [Adam](./Adam/)
- [Daniel](./Daniel/)
- [David](./David/)
- [Deborah](./Deborah/)
- [Elijah](./Elijah/)
- [Elisha](./Elisha/)
- [Enoch](./Enoch/)
- [Esther](./Esther/)
- [Gideon](./Gideon/)
- [Hannah](./Hannah/)
- [Isaiah](./Isaiah/)
- [Jacob](./Jacob/)
- [Jeremiah](./Jeremiah/)
- [Job](./Job/)
- [Jonah](./Jonah/)
- [Joseph](./Joseph/)
- [Joshua](./Joshua/)
- [Moses](./Moses/)
- [Nehemiah](./Nehemiah/)
- [Noah](./Noah/)
- [Ruth](./Ruth/)
- [Samuel](./Samuel/)

## Template and chapter games

[`__Template/`](./__Template/) is the starter for new layered comic stories. At the end of each act, the player selects a random completable game from [`__shared/chapter-games/games.json`](./__shared/chapter-games/games.json). An act is recorded as complete after its game reports success.

To configure bonus stories for a template-based story, set a unique `storyId` and add entries to `bonusStories` in `data/manifest.json`. Bonus links appear after the player completes every act and its challenge. See the [template rollout guide](./__Template/__docs/template-rollout-guide.md) for the configuration example.

## Project references

- [Source of Truth Overview](./SOURCE-OF-TRUTH-OVERVIEW.md)
- [Authoring tools](./__Tools/)
- [Shared resources](./__shared/)
- [Build and utility scripts](./scripts/)
- [Shared story editor tools](./shared-tools/)
