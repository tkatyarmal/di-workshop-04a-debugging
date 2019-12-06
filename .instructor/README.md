# Debugging workshop: instructor notes

The aim of this workshop is to introduce a couple of debugging tools -
console.log and the Chrome debugger. We'll be framing these tools with two key
debugging techniques:

- Increasing visibility
- Tightening your feedback loop

The aim of both of these is to help the developer collect as much information as
possible. Hopefully the new information will allow them to validate or
invalidate their understanding of a problem, allowing them to solve it.

## Step 1: get set up

Have the students fork & clone this repo and set it up as they would a normal
workshop:

```sh
git clone git@github.com:adaapp/di-workshop-04a-debugging.git
# OR
git clone https://github.com/adaapp/di-workshop-04a-debugging.git


cd di-workshop-04a-debugging
npm start
```

Get them to open http://localhost:5000/sketch in their browsers.

### The sketch

The sketch is a simple 'game' - the user has to click the button to increase
their score. It has some problems though - mainly that it doesn't work at all.
Explain and demonstrate this to students.

## Step 2: lets look at the code

Skim through the code with the students. Don't linger too long on each line -
just a rough overview of each function and what it's for. We don't want students
to spot errors right away!

## Step 3: what's our strategy?

We know roughly what the app is trying to do now, but we still don't really know
anything about it or why it's not working. How can we find out what's wrong?

Ask the students - how can we figure out the cause of a problem with our code?

Typically, it comes down to **needing more information**. With more information,
we can check our understanding and see clearly what's wrong. We use two
techniques to get more information.

1. **Increase visibility.** If we can't see what's going on, we can't find
   anything out! Increasing visibility means making it so we can see what's
   going on inside out program as it's running. Ask the students - how can we do
   this? Some options:

   - Just look! Open up the console. Are there any errors? What do they say?
   - Add loads of `console.log` statements
   - Show more information in our app so we can see what's going on
   - Some may suggest the debugger! yay!

2. **Tighten your feedback loop.** By increasing visibility, we might now have a
   lot of information. It can be too much - a low _signal to noise_ ratio. If
   you've got too much information, it's harder to see the patterns that
   actually matter to you.

   Sometimes, we can also find that it takes too long to get the information we
   need. If your error only occurs after clicking 7 different buttons in your
   app, you're going to spend a long time clicking to collect enough data to be
   meaningful. This, again, is about the _signal to noise_ ratio. So, how can we
   tighten our feedback loop and focus on just the information we need?

   - Remove your `console.log`s!
   - Change your app so you need less steps to get to the problem
   - Use something like a REPL - the console - to directly run your code
   - The debugger again maybe?

## Step 4: look at what we already have!

Open the app and the JS console. Have a click around and see what happens. What
can we see?

There should be an error like this:

```
Uncaught ReferenceError: mousex is not defined
    at isMouseInButton (sketch.js:41)
    at mousePressed (sketch.js:34)
    at p5._onmousedown (p5.js:57039)
```

Talk through how to read an error & stack trace like this. The first line is the
message - some information about what's gone wrong. The rest is where in our
code it happened. The function, file, and line where our error occured.

Open up sketch.js and highlight line 41. What can we see? Hopefully students
will be able to point out that the `x` in `mouseX` should be capitalised.

Save and refresh! If you click around a bit, the error is gone! But our score
still isn't going up. Just by looking in the console we've solved one problem,
but there are more!

## Step 5: add some `console.log`s

For this next problem, we don't have a handy error telling us what's going
wrong. We can use `console.log` to help us see what's happening.

It's important here that we're really deliberate with the console.logs that we
add. For each one, have the group decide what to add **and what they expect to
see, if the code was working correctly.**

1. Add a `console.log` in `mousePressed` to check its getting called when we
   click the mouse
2. Add a `console.log` in the `if` statement to check if it's evaluating - it's
   not!
3. Log the value of `shouldIncreaseScore` - what does that tell us? What are we

Hopefully, this is enough information to discover the next error - we're not
returning from `isMouseInButton`.

## Step 6: use the debugger

Now, if we click around we find the button doesn't work, but some areas of the
screen _do_ increase the score. What's going on?

Open the chrome debugger and add a break point in `mousePressed`. Demonstrate
stepping through a few times and using step in, step over, step out, etc.

Demonstrate hovering over variables to check their values, and the scope window
with the variable list. We can also use the console to dynamically check values.

After stepping through a few times, we collectively should be able to figure out
the final problem - the wrong comparison operator.
