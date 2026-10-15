---
title: "Spider Solitaire"
description: "In 1997, I was working at a small Internet company. I learned lots of things. One of the things I remember is discovering a challenging card game called Spider Solitaire. I built a free version without ads or tracking."
date: 2026-10-15
---

The story of my first software job starts when I was 15. How I got it is a different story. This is a story about my first boss.

He was this older guy, Justin. Being 15, literally everyone was older than me at that time. He grew up in Arkansas. Lived in France. Designed the inertial navigation system for the Concorde. I think he sold airplanes at one point. Cursed loudly in Arabic, banging the desk when stuck on a bug; I never knew whether that part was real. Or how he ended up in my hometown.

We built websites on the LAMP stack (Linux, Apache MySQL, PHP). Our customers were local businesses: factories, car dealerships, TV stations, hospitals. Every site had a static component (pretty pictures) and a dynamic component (like product details or blog posts). The static component was the province of the creative department; the dynamic component belonted to the technical department, where we worked. Three things I remember from this time.

First, the dynamic part was stored in a MySQL database. We had an interface to add data which was, and still is, common. What was not common is that my boss built this Javascript layer that accumulated bulk edits in memory and allowed the user to commit them in batches. Back in 1997, Javascript was only used to do basic stuff like form validation. Websites were heavy on the server component and users had to wait for a server roundtrip for every action. His interface was so snappy, like a native application. Today, we take this for granted with frameworks like React. But it was remarkable that he was doing something like that, 16 years prior.

Second, he made this thing generic and automated the heck out of spinning it up for new customers. I remember these giant Makefiles that would generate all the code. Of course, we take for granted scaffolding from various frameworks today, but I had never seen that before.

Third, whenever he got stuck on a problem, he played Spider Solitaire, this really hard solitaire card game. Well, hard when you play it with 4 suits. It’s become one of my go-to puzzles when I’m stuck, particularly on long plane rides.

There are a plethora of Spider Solitaire apps out there, but like so many ecosystems today, they’re littered with overpriced apps, in-app purchases, and tracking. I made an edition without any of these things.

Thanks Justin, teaching me about seeing past what’s being done, the importance of automation, and solving problems.

Here’s my edition of the game, dubbed [Open Spider Solitaire](https://apps.apple.com/us/app/open-spider-solitaire/id6807200422).


