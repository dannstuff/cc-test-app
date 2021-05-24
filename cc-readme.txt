Crowd Cube Test - Daniel Morgan - for instructions on how to setup the project see README.md

technologies used - 

- React
- Typescript
- Styled components
- React media query


Development Process - 

To begin the test, I first viewed the investments page that I would be recreating in order to plan how I would build the page.
I seperated the UI in to different categories, for example things I thought would be views and things I thought would be indidviual components etc.
I also planned to have a common 'Layout' component that renders all other views and would live at application level, as in a real production enviroment, 
there would need to be certain aspects of the UI that would be consistent across different views. I also ensured that I planned for a responsive UI that could be
viewed on both web and mobile devices. 

A constant thought in my mind was to develop the page and application as if it were a real production application and there were others working on it, so I made sure to impliment standards 
like code consistentcy, a consistent file/directory structure and attempted to make all components as lightweight as I possibly could. Initially, I had planned to use Redux and possibly some 
server side rendering with Next JS, however I felt for the purpose of this singlular page, using both would possibly slow me down and could have been overkill and more expensive than benneficial.
Instead, I tried to focus on building small, lightweight, reusable components and keeping my code as clean as possible.


Things I didn't manage to to - 

Unfortunately, I ran out of time to impliment testing and instead decided to focus on getting as much of the UI done as I possibly could. As the application is pretty static,
the chances of anything breaking are extremely small, however I think in an actual production enviroment where you would be retreiving information from an API, more attention should be paid
to handling possible undefined errors in areas such as the investment cards. I also couldn't get the hover annimation working on the investment card, which really bugged me. I also didn't have
time to get the burger bar working on the mobile nav.  


Things I would do given more time - 

I really enjoyed working on the page, it was nice to look at something different. Given more time, I would like to take the static features on the page such as searching/filtering and make 
them more dynamic and actually functional. I had also played around with the idea of a "Featured Investment Opportunity" that would have been displayed at the top of the page, above
the grid, however I couldn't get the styling/spacing correct in time. 