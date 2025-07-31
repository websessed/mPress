
/* 

    version 1:
        -sign in via key phrase (6 words)
        -user signatures & id 
        -user profile (id, bio, posts, views, join date) 
        -post metadata (views, likes, shares, reposts)
        -blog editor with media support 
        -blog dashboard (
            new post, 
            view published, 
            view drafts, 
            view liked/shared/reposts
        )


    version 2: 

    tech stack {
        next, zustand, tiptap
        node, express
        postgre, ipfs
        elliptic, bip39 + secp256k1
        nostr + relays
    }


    Benefits?
    -no (
        subscribing/following
        email, username, pwd; just id + key prhase 
        altering or deletion of posts 
        account recovery 
        tracking, censorship of authors 
        ads
    )

    Philosophy
    -stateless 
    -immutable 
    -anonymous
    -censorship-resistant 


    Who Would Use This?
    -whistleblowers 
    -citizen journalists in oppresive regimes 
    -historians building archives 
    -exiled artists, novelists, poets
    -developers who want a github where projects can't be deleted 
    -and... anyone who believes the internet should have a memory 

*/

