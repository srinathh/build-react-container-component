Building React Container Components Correctly 
=============================================
This article shows you how to correctly build React components,
particularly container components that hold children and might
need to modify classes on a child, in a modular, flexible yet
reusable way. This article integrates knowledge scattered
across multiple sources captured in the references at the end
to integrate best practices on building flexible components.

End Goal
--------
We will build a container component like the picture below. It 
is a colored box that can contain children that will automatically
span the width of the container and have center aligned text.
The parent can specify the background color and the title.

The component should however be flexible. The program which uses
the component wants to be able to override the styling of the title
and also detect clicks on the box.

Pre-Requisites
--------------
This article assumes you already have familiarity with React and 
have Create React App installed on your development computer. It
uses ES6 conventions along with a few experimental features which
Create React App should be able to handle

