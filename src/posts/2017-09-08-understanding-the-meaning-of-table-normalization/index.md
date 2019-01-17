---
title: 'Understanding the meaning of table normalization'
description: 'What does it really mean for a table to be normalized?'
image: https://cdn-images-1.medium.com/max/2600/1*iq8CT4fj77aQWy3d6WpgYQ.png
date: '2017-09-08T17:08:13.064Z'
path: '/blog/understanding-the-meaning-of-table-normalization'
draft: false
presentation: false
hideImage: false
imageWidth: false
aliasPath: '/blog/database-normalization'
---

<div class="info">

This post was originally published on my Medium blog. You can check it out [here](https://medium.com/@romogo17/understanding-the-meaning-of-table-normalization-bdbc8efb94b4).

</div>

## An awakening tale

I remember once being in a Database Design class. We were learning about table normalization and the so called Normal Forms.

We thought we were beginning to understand how to normalize a relation, how to extract tables following a method that would result in a “clean” and unambiguous model. We were blindingly looking at examples to follow so we could better understand the subject and later succeed in our exams, following the method like robots without first questioning what did it really meant what we were doing.

This way of thinking was so narrow…

One day, after explaining the theory, the professor looked at us over his glasses and threw a simple yet tricky question: _“So, when is a table normalized?”_

I was sort of baffled by this question, I knew how to follow the normalization process, how to look for a table to satisfy 1NF, 2NF, 3NF…, but… after all, what did this really **_mean_**, what was the _purpose_?

After the question was thrown I remember hearing one classmate say _“A table is normalized when the table is in 3NF” _(I know there are more than 3 Normal Forms, but that’s not really the aim of this story)

_“But what does it mean for a table to be in 3NF?”_, answered back the professor with a subtle smile. His response was as baffling as it could be. We already knew how to normalize a table but we hadn’t yet understood the meaning behind it.

After a couple seconds waiting for the professor to answer his rhetorical question, he finally spoke up.

> “A table is normalized when it complies with the business rules”, he said.

At this point, I was a bit confused. Sure, the answer was simple and had some logic in it. But why had he came up with the business rules as the answer? We certainly didn’t ever considered the *business *itself while following the process before.

## So, why the business rules?

You see, it's interesting how so many people don’t ever consider the business itself while designing a solution, they follow a process but don't realize **_why _**is it done that way, where did it all come from.

People don’t usually consider the business because they only think of the word _“business”_ in terms of its economic significance, but it is much more than that. Your business is the representation of your activities, the way you produce a good or offer a service.

> Your business has an identity that is inherently tied to the information you store.

You shouldn’t consider your database to be a place where you **_just store_** data. Databases are not just a place to throw your information away in an organized manner so you can make transactions upon it and query its contents later.

Databases are, in most cases, a representation of your business core. The way the data is organized and mapped all over is a true symbol of your business logic. Your information isn’t just that: information; but a reflection of your business way of functioning and its identity.

This is why the professor response earlier was so interesting, _“how do I make my tables comply with the business rules”_, you might ask. This may not look as obvious at first, but it is as simple as making your tables **_carry out your functional dependencies._**

> Your business rules (or business logic) dictate the functional dependencies upon which you will later design your database.

I’m by no means saying you shouldn't make use of the Normal Forms, or totally forget about the normalization process, there’s a reason it exists. What I’m trying to accomplish is for you to look closely into what is it that you are doing, wonder **_why _**are you doing it that way. If you do this, the process will become much easier and understandable and you might even do a better job than if you just follow a methodical process.

So next time you normalize or design a relational model for a database don't follow the process you’ve learned before. Think about its purpose, why is it that you are doing what you’re doing. Make the design comply with your business and carry out your functional dependencies; and, if you do it correctly, your database will be truly normalized.
