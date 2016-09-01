var text = "It's the first day on the month, which makes it an awfully nice date to launch this blog. I wish I could attribute this launch to something so thoughtful as good timing, but really, I've just been fiddling with this thing for so long that my job/internship search is starting to complain. So (◔◡◔✿)\nHere goes the opening post for this site.\n\nFor one week's worth of work, I'm okay with where this site is for now. It's a pretty basic React single-page app (don't ask me yet about the rationale for why I should make my portfolio site a single-page app--I'll figure it out soon (´∀｀)ﾉヽﾉヽ ), but I got my feet wet with the framework everyone's crazy about, banged my head against some of its shortcomings, and can now say that I know something of a way around it. In my head I imagined whipping something like this out in a day +･.゜。(´∀｀)。゜. ... but I guess speed comes a little further down the line.\n\nDesign-wise, I keep thinking about how a lot of the sites I see today come from a slightly different angle, with the big blocks of real estate devoted to color, iconic sections of text, and a willingness to have you scroll down to get a sense of what the site's all about. (Is it the influence of Bootstrap?) I don't disagree with it--it all makes good sense and has good impact. But I wanted to approach site-building in a way that would let me see what my own sensibilities result in, and this is what I got.\n\n(Honestly, I wouldn't call it an inspired design, and I have a horrible sneaking suspicion that my years spent playing on Neopets played a role here in ending up with the whole top-banner, vertical body, and footer design.)\n\nIn any case, time always presents the chance to fiddle around further (..after other priorities are taken care of), so here's what I'm considering for the future:\n\n* storing blog posts in a lightweight database with fields for different pieces of metadata, rather than manually creating the entry objects myself (´∀｀);;;\n* better yet, figuring out how to integrate a proper CMS with this site, since that's probably the proper tool for this sort of task\n* unless I want to build my own api/cms for submitting blog posts to the site. ( ﾟ▿ ﾟ) for learning purposes\n* differentiating between journaling types of posts and more how-to/sharing-of-expertise types of posts; potentially creating new view/components for the latter\n* giving menu buttons further states so I can reduce or de-highlight the option for the active view on hover over other options\n* refactoring the design to be a little more blocky and modular, with less real estate for the text and more square icons\n* a media query to keep proportions fixed at large viewport sizes (getting around the unusually big proportions problem)\n* a media query for small viewport sizes, for variety and a sense of responsiveness\n*creating a container element for the whole site, so as not to directly use the body elemet\n* adding a logo or illustration of some sort with a light touch of animation\n* taking the time to pay more attention to web performance and accessibility\n* looking into using external style sheets (instead of inline styles) with React and understanding the best use cases for each\n* understanding when it might be useful to integrate a web framework like Ruby on Rails or Django (or Sinatra or Flask) with the React frontend\n* just getting more familiar with React in general and understanding small conventions like when to create a new class, when to extend a class instead, when to refer to variables with curly braces, etc.\nSeems like a fairly good list for now, so I'll keep it at that and maybe come back and cross some items off as luck would have it in the future."

export default text;