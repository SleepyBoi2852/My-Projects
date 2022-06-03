You need to get a key with "Youtube Data API V3"
https://developers.google.com/youtube/v3/getting-started

replace the template key in ".env" with the key that it gives you and do "npm install" in the same folder as the project, and once that's done, do "node main" and it should give you a prompt in which you can enter nothing, which gives you the youtube home page reccommendations, or enter something which is exactly like a youtube search 

no matter what you search (even if you search nothing) you will get 50 of the links and names of the videos in the list of Videos the API sends back you can also use "listlink.txt" that it outputs to download all videos using youtube-dl
https://youtube-dl.org/
