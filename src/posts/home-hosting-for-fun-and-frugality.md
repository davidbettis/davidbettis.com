---
title: "Home hosting for fun and frugality"
description: "I recently built a home sever. The hobbyist ecosystem is better than ever."
date: 2026-04-10
---

I recently spent $200 on a used mini-PC. It's going to save our family approximately $189/yr in software subscriptions, and up to $500 in forgoing other electronics purchases.  The machine is an Intel NUC10i7FNK with an Intel Core i7 processor, 16 GB of RAM, and a 256 GB SSD drive. It sits in a closet and runs Debian Linux stable. This is the first time in 15 years I've had a Linux machine at home, and the hobbyist ecosystem is the best I've ever seen. Here's what I'm running and what each piece saves:

### shairport: saving $228-$499

[shairport](https://github.com/mikebrady/shairport-sync) turns my server into an AirPlay speaker. Our home has speakers built into the ceiling, with miniplug audio cables running into a closet. The home audio system is split into 4 zones (with 4 miniplug cables), and you can pick which zone is playing in each room. Previously, I had Echo Dots wired up to the audio cables, and we used Spotify Connect to stream. The downside of this setup is that each family member had to have their own zone, we were locked into Spotify, and I'm now wondering when Amazon will decide my old dots are [no longer worthy of support](https://www.wired.com/story/amazon-pulls-support-for-perfectly-fine-older-kindles/)... I installed shairport-sync on the server as a [Docker container](https://hub.docker.com/r/mikebrady/shairport-sync), and it basically just worked! Now anyone with an Apple device in the house can stream from any app. The alternatives I had considered were Sonos One ($499) (!) or an Apple TV with an HDMI-to-miniplug extractor ($228).

### Expense tracking: saving $57/yr

[Actual Budget](https://actualbudget.org/) is a replacement for a spreadsheet I've been using the past several years. Prior to the spreadsheet, I was using [Mint](https://mint.intuit.com/), which was shut down in 2024. My spreadsheet was OK, but had a couple downsides. First, it wasn't resilient to adding or changing categories (lots of formula updates). And second, I manually pulled transactions from all my financial institutions every month which was tedious. Actual has an integration with [SimpleFIN Bridge](https://beta-bridge.simplefin.org/) that will automatically pull transaction data for $15/yr (!). Compared to Quicken Simplifi ($72/yr), which is Intuit's Mint replacement, I'm **saving $57/yr**.

### Music library: saving $0/mo

[Navidrome](https://www.navidrome.org/) allows you to self-host a music library, where you can search, stream, and download music from anywhere. I found a polished iOS client called [Amperfy](https://github.com/BLeeEZ/amperfy). If you actually own music, this setup is *super compelling*.

However, since I love music so much, having access to the whole canon of published music for $13/month on Spotify is an order of magnitude more compelling. That experience simply can't be replicated in this model.

There is an argument that less is more, that buying albums is a way to more deeply engage and appreciate music. I am sympathetic to this line of thinking, but feel like I would have to start from scratch, or close to it. The playlists I've accumulated from Spotify in the last 5 years alone would take a significant amount of time and effort to acquire and add to the library. In lieu of that, I loaded up some old indie EDM mp3s that aren't in Spotify's catalog. I see my own personal music library as augmenting, not replacing Spotify. I'm not sure how to put a dollar figure on that, but it may loosen my dependence on Spotify.

### Backups: saving $84/yr

I was paying $10/mo for 2TB of storage in iCloud Drive and was using about 400 GB. I found an old 1TB USB drive in my closet, hooked it up to the server, and set up Samba so my Mac can mount it. I moved about 300 GB of infrequently used backups to this drive. Also, I copied these backups to Amazon S3 and enabled Glacier "flexible retrieval" storage, which will cost about $1/mo ($12/yr). That let me downgrade my Apple plan from 2TB for $10/mo to 200GB for $3/mo.

### Password manager: saving $48/yr

[Vaultwarden](https://github.com/dani-garcia/vaultwarden) is a self-hosted implementation of Bitwarden. Having a password manager is non-negotiable in this day and age. Self-hosting gives me more agency over this critical piece and something I've wanted to do for a long time. Comparable functionality from Bitwarden would **cost $20/yr (individual) or $48/yr (families)**.

### Version control: $0 saved

[Gitea](https://about.gitea.com/), local Github clone. All of the above software requires some amount of configuration. Gitea allows me to version control and back up these configs in my own centralized Git server. Personal Github is free, so no real savings here.

## Fine print

A few things a skeptic might reasonably ask:

**What about reliability?** As someone who carried a pager for Amazon.com web server outages, this is real. The only personally mission-critical things on this list are the password manager and backups. For the password manager, BitWarden clients download the password archive, so a server outage does not result in being locked out of your passwords, just starting new sessions or adding passwords. For backups, things are also backed up offsite to S3. All that to say, I've setup systems such that outages will be important to address, but not critically urgent.

**What about time?** The whole setup took about a week's worth of evenings. There's a saying "Linux is only free if you don't value your time." That's still somewhat true, but it's *so much better* than it used to be. Docker has simplified running Linux services. Also, pairing with Claude on this made it way easier than combing through forums.  I was also able to ask Claude things like "What is the modern equivalent of netstat?" or "Where did ifconfig go?" or "I am familiar with rc.d/init.d; assuming that, explain to me how systemctl works?" It turbo-charged getting up to speed on the latest commands.

I'm excited to contribute to some of the above projects and continue exploring.

### In summary

| Service | Annual savings |
|---|---|
| Airplay (one-time) | $228–$499 |
| Actual Budget | $57 |
| Backups | $84 |
| Vaultwarden | $48 |
| Navidrome | $0 |
| Gitea | $0 |
| **Recurring total** | **~$189/yr** |

