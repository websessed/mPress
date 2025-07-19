
/* 

    version 1:
        -sign in via key phrase (private)
        -user profile (id, bio, posts, views, join date [public]) 
        -post metadata (views, likes, shares, mirrored count)
        -blog editor with media support 
        -blog dashboard (
            new post, 
            view published, 
            view drafts, 
            view liked/shared/mirrored posts 
        )


    tech stack {
        react (frontend)
        bip39 + elliptic (phrase key)
        ipfs (immutable, decentralized post storage)
        nostr + public relays (post metadata indexing)
        indexed-db (local storage for drafts/like/mirrored post cache)
        dayjs (time formatting)
    }


    Benefits?
    -no (
        subscribing/following
        email, username, pwd; just id + key prhase 
        altering or deletion posts 
        account recovery 
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