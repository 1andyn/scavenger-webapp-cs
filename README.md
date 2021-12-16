# scavenger-webapp-cs
Simple Virtual Scavenger Hunt implemented as a React Single page Application protecting each step with a password.
This is the client sided only version which will not have a protected backend to prevent source code peeking from seeing passwords. 

**This implementation is not meant to be secure!**
The purpose of this is to be able to host this on a free platform such as github or gitlab as a page repo branch.

**Planned functionality:**
 - Display an Introduction
 - Shows initial scavenger hunt step (image and clues and a password prompt)
 - Entering the correct password will transition into the next step

# dependencies
 - react for front end
	 - react-spring (for animations to look nicer)
	 - bootstrap (UI)

# usage
- See rawdata file to see format: 
- Each line is prefixed with a word
- prompt: (this is the prompt/info displayed to the player
- images: (these are the images that are cycled to the player to the left of the prompt)
- answer: (this is the answer to proceed to the next step
- intermission: (this is the text displayed to the user after guessing correctly)

# favicon credit:
- Graphics Title: 1f5fa.svg
- Graphics Author: Copyright 2020 Twitter, Inc and other contributors (https://github.com/twitter/twemoji)
- Graphics Source: https://github.com/twitter/twemoji/blob/master/assets/svg/1f5fa.svg
- Graphics License: CC-BY 4.0 (https://creativecommons.org/licenses/by/4.0/)
