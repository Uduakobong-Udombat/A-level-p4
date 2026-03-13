'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  CheckCircle2,
  Circle,
  ChevronRight,
  RefreshCw,
  Search,
  ListChecks,
  Code2,
  Play,
  TerminalSquare,
  Lightbulb,
} from 'lucide-react';

const lessons = [
  {
    id: 'lists',
    title: 'Declaring and filling 1D arrays / lists',
    goal: 'Create a list, store values in it, and access items by index.',
    why: 'In Python, a 1D array is usually taught as a list. You can create a list with values already inside it, or start empty and add values one by one.',
    ideas: [
      'A Python list uses square brackets: numbers = [10, 20, 30]',
      'Indexes start at 0, so numbers[0] is the first item',
      'Use append() to add values one at a time',
      'Use a loop when you want to fill a list from user input',
    ],
    code: `# Example 1: declare a list with values already inside\nmarks = [78, 84, 91, 66]\nprint(marks)\nprint(marks[0])\n\n# Example 2: start empty and fill it\nnumbers = []\nfor i in range(3):\n    value = int(input("Enter a number: "))\n    numbers.append(value)\n\nprint(numbers)`,
    io: [
      {
        title: 'Shown input/output',
        input: 'Enter a number: 5\nEnter a number: 9\nEnter a number: 2',
        output: '[5, 9, 2]',
      },
      {
        title: 'Accessing one item',
        input: 'marks = [78, 84, 91, 66]',
        output: 'marks[0] -> 78',
      },
    ],
    challenge: `# Task:\n# Create an empty list called names.\n# Ask the user for 3 names.\n# Add each name into the list.\n# Print the full list at the end.`,
    solution: `names = []\nfor i in range(3):\n    name = input("Enter a name: ")\n    names.append(name)\n\nprint(names)`,
    quiz: [
      {
        question: 'Which line creates an empty list?',
        options: ['numbers = ()', 'numbers = {}', 'numbers = []', 'numbers = <>'],
        answer: 2,
        explain: 'Square brackets create a Python list.',
      },
      {
        question: 'If values = [4, 7, 9], what is values[1]?',
        options: ['4', '7', '9', '1'],
        answer: 1,
        explain: 'Indexes start at 0, so index 1 is the second item: 7.',
      },
    ],
  },
  {
    id: 'validation',
    title: 'Input validation loops',
    goal: 'Keep asking until the user enters valid data.',
    why: 'Programs become more reliable when they reject bad input and keep looping until the value is acceptable.',
    ideas: [
      'Validation checks whether input matches a rule',
      'A while loop repeats until a valid value is entered',
      'Common rules include ranges, lengths, and allowed words',
      'You should print a helpful error message when the input is wrong',
    ],
    code: `mark = int(input("Enter a mark from 0 to 100: "))\n\nwhile mark < 0 or mark > 100:\n    print("Invalid input. Try again.")\n    mark = int(input("Enter a mark from 0 to 100: "))\n\nprint("Accepted mark:", mark)`,
    io: [
      {
        title: 'Shown input/output',
        input: 'Enter a mark from 0 to 100: 145\nEnter a mark from 0 to 100: -3\nEnter a mark from 0 to 100: 88',
        output: 'Invalid input. Try again.\nInvalid input. Try again.\nAccepted mark: 88',
      },
    ],
    challenge: `# Task:\n# Ask the user to enter YES or NO.\n# Keep looping until one of those two values is entered.`,
    solution: `answer = input("Enter YES or NO: ")\n\nwhile answer != "YES" and answer != "NO":\n    print("Invalid input")\n    answer = input("Enter YES or NO: ")\n\nprint("Accepted:", answer)`,
    quiz: [
      {
        question: 'Why is a validation loop useful?',
        options: [
          'It makes the program slower on purpose',
          'It keeps asking until the input is valid',
          'It sorts the data automatically',
          'It removes duplicates from a list',
        ],
        answer: 1,
        explain: 'Validation loops prevent the program from continuing with bad input.',
      },
      {
        question: 'Which condition correctly rejects marks outside 0 to 100?',
        options: ['mark < 0 and mark > 100', 'mark < 0 or mark > 100', 'mark == 0 and mark == 100', 'mark != 50'],
        answer: 1,
        explain: 'A number is invalid if it is less than 0 OR greater than 100.',
      },
    ],
  },
  {
    id: 'bubble',
    title: 'Bubble sort',
    goal: 'Compare neighbouring items and swap them into order.',
    why: 'Bubble sort is a standard algorithm often taught first because the logic is simple and visual.',
    ideas: [
      'Compare item i with item i + 1',
      'Swap them if they are in the wrong order',
      'One full pass moves the largest remaining value to the end',
      'Repeat passes until the list is sorted',
    ],
    code: `numbers = [5, 1, 4, 2, 8]\n\nfor pass_num in range(len(numbers) - 1):\n    for i in range(len(numbers) - 1 - pass_num):\n        if numbers[i] > numbers[i + 1]:\n            temp = numbers[i]\n            numbers[i] = numbers[i + 1]\n            numbers[i + 1] = temp\n\nprint(numbers)`,
    io: [
      {
        title: 'Shown input/output',
        input: '[5, 1, 4, 2, 8]',
        output: '[1, 2, 4, 5, 8]',
      },
    ],
    challenge: `# Task:\n# Use bubble sort to sort this list into ascending order:\n# scores = [12, 4, 19, 7, 3]`,
    solution: `scores = [12, 4, 19, 7, 3]\n\nfor pass_num in range(len(scores) - 1):\n    for i in range(len(scores) - 1 - pass_num):\n        if scores[i] > scores[i + 1]:\n            temp = scores[i]\n            scores[i] = scores[i + 1]\n            scores[i + 1] = temp\n\nprint(scores)`,
    quiz: [
      {
        question: 'What does bubble sort compare each time?',
        options: ['The first and last item', 'Random pairs', 'Neighbouring items', 'Only the middle item'],
        answer: 2,
        explain: 'Bubble sort works by comparing adjacent values.',
      },
      {
        question: 'After one full pass in ascending bubble sort, what is guaranteed?',
        options: [
          'The smallest value is at index 0',
          'The entire list is sorted',
          'The largest remaining value has moved to the end of the unsorted part',
          'No swaps have happened',
        ],
        answer: 2,
        explain: 'Each pass pushes the largest unsorted value to the right.',
      },
    ],
  },
  {
    id: 'binary',
    title: 'Binary search',
    goal: 'Search a sorted list quickly by halving the search area.',
    why: 'Binary search is much faster than checking every item one by one, but it only works on sorted data.',
    ideas: [
      'The list must already be sorted',
      'Check the middle item first',
      'If the target is smaller, search the left half',
      'If the target is larger, search the right half',
    ],
    code: `numbers = [3, 7, 9, 12, 15, 18, 21]\ntarget = 15\nlow = 0\nhigh = len(numbers) - 1\nfound = False\n\nwhile low <= high and found == False:\n    mid = (low + high) // 2\n\n    if numbers[mid] == target:\n        found = True\n    elif numbers[mid] < target:\n        low = mid + 1\n    else:\n        high = mid - 1\n\nprint(found)`,
    io: [
      {
        title: 'Shown input/output',
        input: 'numbers = [3, 7, 9, 12, 15, 18, 21]\ntarget = 15',
        output: 'True',
      },
      {
        title: 'Important reminder',
        input: 'Unsorted list: [12, 3, 21, 7, 9]',
        output: 'Binary search should not be used until the list is sorted first.',
      },
    ],
    challenge: `# Task:\n# Search for 42 in the sorted list below using binary search:\n# values = [4, 8, 15, 16, 23, 42, 50]`,
    solution: `values = [4, 8, 15, 16, 23, 42, 50]\ntarget = 42\nlow = 0\nhigh = len(values) - 1\nfound = False\n\nwhile low <= high and found == False:\n    mid = (low + high) // 2\n    if values[mid] == target:\n        found = True\n    elif values[mid] < target:\n        low = mid + 1\n    else:\n        high = mid - 1\n\nprint(found)`,
    quiz: [
      {
        question: 'What must be true before using binary search?',
        options: ['The list must be reversed', 'The list must be sorted', 'The list must have an even length', 'The target must be at the end'],
        answer: 1,
        explain: 'Binary search only works properly on sorted data.',
      },
      {
        question: 'If numbers[mid] is smaller than the target, what should happen next?',
        options: ['Search the left half', 'Search the right half', 'Stop immediately', 'Swap values first'],
        answer: 1,
        explain: 'A smaller middle value means the target can only be to the right.',
      },
    ],
  },
  {
    id: 'output',
    title: 'Outputting array contents clearly',
    goal: 'Display list contents in a clean and understandable way.',
    why: 'Raw output is sometimes enough, but good programmers often format output so a user can read it easily.',
    ideas: [
      'print(my_list) shows the whole list in one go',
      'A loop lets you print one item per line',
      'Use labels so the output is easy to interpret',
      'join() is useful when printing strings in one line',
    ],
    code: `fruits = ["apple", "banana", "mango"]\n\nprint("Whole list:", fruits)\nprint()\nprint("One per line:")\nfor item in fruits:\n    print("-", item)\n\nprint()\nprint("Joined:", ", ".join(fruits))`,
    io: [
      {
        title: 'Shown output',
        input: "fruits = ['apple', 'banana', 'mango']",
        output: "Whole list: ['apple', 'banana', 'mango']\n\nOne per line:\n- apple\n- banana\n- mango\n\nJoined: apple, banana, mango",
      },
    ],
    challenge: `# Task:\n# Print all values in the list below on separate lines with their position numbers.\n# Example format: 1. red\n# colours = ["red", "blue", "green"]`,
    solution: `colours = ["red", "blue", "green"]\n\nfor i in range(len(colours)):\n    print(i + 1, ".", colours[i], sep="")`,
    quiz: [
      {
        question: 'Which approach is best when you want one list item per line?',
        options: ['Use a loop', 'Use only input()', 'Use bubble sort', 'Use binary search'],
        answer: 0,
        explain: 'A loop lets you print each item clearly on its own line.',
      },
      {
        question: 'Which method is useful for joining strings with commas?',
        options: ['split()', 'append()', 'join()', 'sort()'],
        answer: 2,
        explain: 'join() combines a list of strings into one formatted string.',
      },
    ],
  },
  {
    id: 'testing',
    title: 'Testing with shown inputs and outputs',
    goal: 'Use test cases to check that your code works as expected.',
    why: 'Testing makes bugs easier to spot. It also proves whether your code handles normal cases, edge cases, and invalid input.',
    ideas: [
      'A test case normally includes inputs and expected outputs',
      'Use more than one test case, not just one example',
      'Include normal, boundary, and invalid data where possible',
      'Shown inputs and outputs make your algorithm easier to verify',
    ],
    code: `# Program: find the largest value in a list\ndef largest_value(numbers):\n    largest = numbers[0]\n    for item in numbers:\n        if item > largest:\n            largest = item\n    return largest\n\nprint(largest_value([4, 9, 1, 7]))   # expected 9\nprint(largest_value([12, 12, 12]))   # expected 12\nprint(largest_value([-5, -2, -9]))   # expected -2`,
    io: [
      {
        title: 'Example test table',
        input: '[4, 9, 1, 7]\n[12, 12, 12]\n[-5, -2, -9]',
        output: '9\n12\n-2',
      },
    ],
    challenge: `# Task:\n# Write 3 test cases for a program that checks whether a number is even.\n# Show the input and the expected output for each case.`,
    solution: `Test 1: input = 8, expected output = True\nTest 2: input = 13, expected output = False\nTest 3: input = 0, expected output = True`,
    quiz: [
      {
        question: 'What should every good test case include?',
        options: ['Only the code', 'Input and expected output', 'A sorted list only', 'A random number only'],
        answer: 1,
        explain: 'A test case should state what goes in and what should come out.',
      },
      {
        question: 'Why should you use more than one test case?',
        options: [
          'Because one test is always wrong',
          'To check normal and edge cases, not just one situation',
          'To make the program longer',
          'Because Python requires it',
        ],
        answer: 1,
        explain: 'Multiple tests increase confidence that the code really works.',
      },
    ],
  },

  {
    id: 'recursion',
    title: 'Recursion',
    goal: 'Understand that recursion solves a problem by calling the same function on a smaller version of the problem.',
    why: 'A recursive function calls itself. Good recursion always includes a base case to stop the calls, and each recursive step must move closer to that stopping point.',
    ideas: [
      'A recursive function calls itself',
      'There must be a base case',
      'Each recursive call should reduce the problem size',
      'Every call gets its own stack frame',
    ],
    code: `def countdown(n):\n    if n == 0:\n        print("Lift off!")\n    else:\n        print(n)\n        countdown(n - 1)\n\ncountdown(3)`,
    io: [
      {
        title: 'Shown input/output',
        input: 'countdown(3)',
        output: '3\n2\n1\nLift off!',
      },
      {
        title: 'Another example',
        input: 'countdown(1)',
        output: '1\nLift off!',
      },
    ],
    challenge: `# Task:\n# Write a recursive function called greet_down(n).\n# It should print the number, then call itself with n - 1.\n# When n becomes 0, print "Done".`,
    solution: `def greet_down(n):\n    if n == 0:\n        print("Done")\n    else:\n        print(n)\n        greet_down(n - 1)\n\ngreet_down(4)`,
    recommendations: [
      'State both the base case and the recursive case clearly in your answer.',
      'Use a small input such as 3 or 4 when tracing, so each call can be seen clearly.',
      'Do not say a function is recursive unless it really calls itself.',
    ],
    quiz: [
      {
        question: 'What makes a function recursive?',
        options: ['It uses a loop', 'It calls itself', 'It uses input()', 'It always sorts data'],
        answer: 1,
        explain: 'A recursive function is one that calls itself.',
      },
      {
        question: 'Why is a base case necessary?',
        options: ['To make the code longer', 'To stop the function calling itself forever', 'To remove inputs', 'To sort outputs'],
        answer: 1,
        explain: 'The base case gives recursion a stopping point.',
      },
    ],
  },
  {
    id: 'recursion-features',
    title: 'Features of recursion',
    goal: 'Identify the main features that make recursion correct and safe.',
    why: 'Most exam questions expect you to recognise the ingredients of recursion: a base case, a recursive case, progress towards the base case, and return values that build the final answer.',
    ideas: [
      'A base case stops the recursion',
      'A recursive case calls the same function again',
      'The input should get smaller or simpler each time',
      'Return values often build the answer during unwinding',
    ],
    code: `def factorial(n):\n    if n == 1:\n        return 1\n    else:\n        return n * factorial(n - 1)\n\nprint(factorial(4))`,
    io: [
      {
        title: 'Shown input/output',
        input: 'factorial(4)',
        output: '24',
      },
    ],
    challenge: `# Task:\n# In the factorial function, identify:\n# 1. the base case\n# 2. the recursive case\n# 3. what gets smaller each call`,
    solution: `# 1. Base case: if n == 1: return 1\n# 2. Recursive case: return n * factorial(n - 1)\n# 3. Smaller value: n becomes n - 1 each call`,
    recommendations: [
      'When asked for features, mention base case, recursive call, and progress toward the base case.',
      'If a question asks why recursion stops, point directly to the base case.',
      'Explain what changes from one call to the next, for example n becomes n - 1.',
    ],
    quiz: [
      {
        question: 'Which feature ensures recursion eventually stops?',
        options: ['A while loop', 'A base case', 'A print statement', 'A sorted list'],
        answer: 1,
        explain: 'The base case is the stopping condition.',
      },
      {
        question: 'In factorial(n), what change moves the function toward the base case?',
        options: ['n + 1', 'n stays the same', 'n - 1', 'n * 2'],
        answer: 2,
        explain: 'Each recursive call uses a smaller value: n - 1.',
      },
    ],
  },
  {
    id: 'recursion-code',
    title: 'Expressing recursion in code',
    goal: 'Write Python code that uses a clear base case and recursive call.',
    why: 'Recursive code is usually easiest to write when the base case is written first and the recursive call is written second. The function should also return a value where needed.',
    ideas: [
      'Write the base case first',
      'Then write the recursive case',
      'Use return when the function must send a value back',
      'Test with very small inputs first',
    ],
    code: `def sum_to_n(n):\n    if n == 1:\n        return 1\n    else:\n        return n + sum_to_n(n - 1)\n\nprint(sum_to_n(5))`,
    io: [
      {
        title: 'Shown input/output',
        input: 'sum_to_n(5)',
        output: '15',
      },
    ],
    challenge: `# Task:\n# Write a recursive function called power_of_two(n)\n# that returns 2 to the power of n.\n# Example: power_of_two(3) should return 8.`,
    solution: `def power_of_two(n):\n    if n == 0:\n        return 1\n    else:\n        return 2 * power_of_two(n - 1)\n\nprint(power_of_two(3))`,
    recommendations: [
      'Write the exact return statement used in the recursive case.',
      'Choose the simplest possible base case, such as 0 or 1.',
      'Check whether the question expects printed output or a returned value.',
    ],
    quiz: [
      {
        question: 'Which part of recursive code is normally written first?',
        options: ['The loop', 'The import', 'The base case', 'The final print'],
        answer: 2,
        explain: 'Writing the base case first helps make the stopping point clear.',
      },
      {
        question: 'Which version correctly returns the sum from 1 to n?',
        options: ['return n + sum_to_n(n - 1)', 'print n + sum_to_n(n - 1)', 'n = n + 1', 'return sum_to_n(n + 1)'],
        answer: 0,
        explain: 'The recursive case combines n with the smaller problem.',
      },
    ],
  },
  {
    id: 'recursion-tracing',
    title: 'Writing and tracing recursive algorithms',
    goal: 'Trace the order of recursive calls and explain how final answers are built.',
    why: 'Tracing recursion means following the calls down to the base case and then showing how the results come back during unwinding. This is a common exam skill.',
    ideas: [
      'Trace the calls downward first',
      'Mark the base case clearly',
      'Then trace the returns upward',
      'Use small values to keep the trace readable',
    ],
    code: `def factorial(n):\n    if n == 1:\n        return 1\n    else:\n        return n * factorial(n - 1)\n\nprint(factorial(4))`,
    io: [
      {
        title: 'Trace outline',
        input: 'factorial(4)',
        output: 'factorial(4)\n-> 4 * factorial(3)\n-> 4 * 3 * factorial(2)\n-> 4 * 3 * 2 * factorial(1)\n-> 4 * 3 * 2 * 1\n-> 24',
      },
    ],
    challenge: `# Task:\n# Trace the recursive calls for sum_to_n(4).\n# Show the calls down to the base case and the returns on the way back up.`,
    solution: `sum_to_n(4)\n= 4 + sum_to_n(3)\n= 4 + 3 + sum_to_n(2)\n= 4 + 3 + 2 + sum_to_n(1)\n= 4 + 3 + 2 + 1\n= 10`,
    recommendations: [
      'Do not skip directly to the answer; show the call chain and the return chain.',
      'Use arrows, indentation, or one line per call to keep the trace clear.',
      'If the function returns values, mention the value returned at the base case.',
    ],
    quiz: [
      {
        question: 'When tracing recursion, what happens first?',
        options: ['The stack unwinds immediately', 'The base case is ignored', 'Calls continue until the base case is reached', 'The final answer is printed first'],
        answer: 2,
        explain: 'Recursive calls continue downward until the base case is reached.',
      },
      {
        question: 'What happens after the base case returns?',
        options: ['The program forgets earlier calls', 'Results unwind back through earlier calls', 'The input gets larger again automatically', 'The loop starts'],
        answer: 1,
        explain: 'The stored calls resume one by one during unwinding.',
      },
    ],
  },
  {
    id: 'recursion-useful',
    title: 'When recursion is useful',
    goal: 'Recognise problems where recursion is a natural or helpful approach.',
    why: 'Recursion is useful when a problem can be broken into smaller versions of itself, especially with trees, nested structures, divide-and-conquer algorithms, and problems with natural recursive definitions.',
    ideas: [
      'Recursion is often natural for trees and folders inside folders',
      'It fits problems defined in terms of smaller versions of themselves',
      'It is common in divide-and-conquer algorithms',
      'Sometimes iteration is simpler, so recursion is not always the best choice',
    ],
    code: `def total_list(numbers):\n    if len(numbers) == 0:\n        return 0\n    else:\n        return numbers[0] + total_list(numbers[1:])\n\nprint(total_list([4, 5, 6]))`,
    io: [
      {
        title: 'Shown input/output',
        input: 'total_list([4, 5, 6])',
        output: '15',
      },
      {
        title: 'Typical good use case',
        input: 'Traverse folders inside folders',
        output: 'Recursion is useful because each folder can contain smaller subfolders.',
      },
    ],
    challenge: `# Task:\n# Decide whether recursion is a good fit for each problem:\n# 1. Traversing a family tree\n# 2. Printing numbers 1 to 10 once\n# 3. Searching through nested folders`,
    solution: `# 1. Good fit\n# 2. Usually a loop is simpler\n# 3. Good fit`,
    recommendations: [
      'If asked when recursion is useful, mention smaller self-similar subproblems.',
      'Do not claim recursion is always better than loops; explain why it fits a specific problem.',
      'Good examples include trees, folder structures, and divide-and-conquer tasks.',
    ],
    quiz: [
      {
        question: 'Which problem is a strong candidate for recursion?',
        options: ['Printing one flat list once', 'Traversing folders inside folders', 'Reading one number', 'Adding two constants'],
        answer: 1,
        explain: 'Nested folder structures are naturally recursive.',
      },
      {
        question: 'Which statement is best?',
        options: ['Recursion is always faster', 'Recursion is useful when a problem contains smaller versions of itself', 'Recursion removes the need for a base case', 'Recursion only works for numbers'],
        answer: 1,
        explain: 'Self-similar structure is one of the main reasons to use recursion.',
      },
    ],
  },
  {
    id: 'recursion-stack',
    title: 'Stack use and unwinding during recursion',
    goal: 'Explain how recursive calls are stored on the call stack and how unwinding works.',
    why: 'Each recursive call is placed on the call stack. Once the base case returns, the most recent call finishes first, and the stack unwinds in last-in, first-out order.',
    ideas: [
      'Every recursive call gets its own stack frame',
      'Frames are pushed onto the stack as calls are made',
      'The base case starts the returning process',
      'Unwinding happens in last-in, first-out order',
    ],
    code: `def factorial(n):\n    if n == 1:\n        return 1\n    else:\n        return n * factorial(n - 1)\n\nprint(factorial(4))`,
    io: [
      {
        title: 'Stack idea',
        input: 'factorial(4)',
        output: 'Push factorial(4)\nPush factorial(3)\nPush factorial(2)\nPush factorial(1)\nReturn 1\nResume factorial(2)\nResume factorial(3)\nResume factorial(4)',
      },
    ],
    challenge: `# Task:\n# Explain what is on the stack just before factorial(1) returns,\n# and explain what happens immediately after that return.`,
    solution: `# Just before factorial(1) returns, the stack still contains\n# factorial(4), factorial(3), factorial(2), factorial(1).\n# After factorial(1) returns 1, factorial(2) resumes, computes 2 * 1,\n# then returns 2. The stack unwinds one frame at a time.`,
    recommendations: [
      'Use the term stack frame when describing stored recursive calls.',
      'Mention that unwinding begins only after the base case returns.',
      'State that the stack follows last-in, first-out order.',
    ],
    quiz: [
      {
        question: 'What happens to the call stack as recursion goes deeper?',
        options: ['Frames are pushed onto the stack', 'Frames are sorted', 'Frames are deleted randomly', 'Nothing changes'],
        answer: 0,
        explain: 'Each new recursive call adds another stack frame.',
      },
      {
        question: 'What causes stack unwinding to begin?',
        options: ['A loop', 'The recursive case', 'The base case returning', 'A print statement'],
        answer: 2,
        explain: 'Unwinding starts when the base case returns a value.',
      },
    ],
  },

  // ── OOP LESSONS ──────────────────────────────────────────────────────────
  {
    id: 'oop-class',
    title: 'OOP: Classes and constructors',
    goal: 'Define a class with a constructor and private attributes, then create objects from it.',
    why: 'A class is a blueprint for creating objects. The constructor (__init__) runs automatically when you create an object and sets up its starting data. In A-level exams you are often given a class diagram and asked to write the code that matches it.',
    ideas: [
      'Use the class keyword to define a class',
      '__init__ is the constructor — it runs when an object is created',
      'self refers to the specific object being created or used',
      'Private attributes are written with a double underscore: self.__name',
    ],
    beginnerTip: 'Think of a class like a form template. Every time you fill in a new form you get a new object. __init__ is what fills in the blanks for you automatically.',
    commonMistakes: [
      'Forgetting self as the first parameter in __init__ and every method',
      'Writing __init__ with a capital I — it must be all lowercase',
      'Forgetting the double underscore __ before private attribute names',
      'Trying to access a private attribute from outside the class directly',
    ],
    examTip: 'In the exam, if you are given a class diagram, match your attribute names and types exactly. The mark scheme checks exact names.',
    code: `class Tree:\n    def __init__(self, species, height, age):\n        self.__species = species\n        self.__height = height\n        self.__age = age\n\n# Create two Tree objects\ntree1 = Tree("Oak", 12.5, 80)\ntree2 = Tree("Pine", 8.0, 30)\n\nprint(tree1)   # shows the object reference, not the data\nprint(tree2)`,
    io: [
      {
        title: 'What you see when you print an object directly',
        input: 'tree1 = Tree("Oak", 12.5, 80)\nprint(tree1)',
        output: '<__main__.Tree object at 0x...>\n\nNote: you need get methods to print the actual data.',
      },
      {
        title: 'How private attributes are protected',
        input: 'print(tree1.__species)',
        output: 'AttributeError: "Tree" object has no attribute "__species"\n\nPrivate means only methods inside the class can access it.',
      },
    ],
    challenge: `# Task:\n# A class diagram gives you:\n#   Class: Student\n#   Attributes: name (String), grade (Integer)\n#   Constructor takes name and grade as parameters.\n#\n# Write the full class with private attributes.\n# Then create one Student object called s1 with name="Alice" and grade=9.`,
    solution: `class Student:\n    def __init__(self, name, grade):\n        self.__name = name\n        self.__grade = grade\n\ns1 = Student("Alice", 9)`,
    recommendations: [
      'Always write self.__attributeName (double underscore) to make attributes private.',
      'The constructor must be named __init__ exactly — two underscores on each side.',
      'If a question says "write the class definition", you need class Name: and the __init__ method at minimum.',
    ],
    quiz: [
      {
        question: 'What is the purpose of __init__ in a Python class?',
        options: [
          'It deletes an object when it is no longer needed',
          'It is called automatically when a new object is created',
          'It sorts the attributes alphabetically',
          'It makes the class private',
        ],
        answer: 1,
        explain: '__init__ is the constructor. It runs automatically when you write ClassName(...) to create an object.',
      },
      {
        question: 'How do you make an attribute private in Python?',
        options: [
          'Write it in capital letters: SPECIES',
          'Add private before it: private species',
          'Use a double underscore prefix: self.__species',
          'Use a single underscore: self._species',
        ],
        answer: 2,
        explain: 'A double underscore before the name (self.__name) makes the attribute private in Python.',
      },
      {
        question: 'Which line correctly creates a Tree object?',
        options: [
          'Tree.new("Oak", 12.5, 80)',
          'tree1 = Tree("Oak", 12.5, 80)',
          'tree1 = new Tree("Oak", 12.5, 80)',
          'Tree.__init__("Oak", 12.5, 80)',
        ],
        answer: 1,
        explain: 'You create an object by writing VariableName = ClassName(arguments). Python calls __init__ for you.',
      },
    ],
  },
  {
    id: 'oop-getters',
    title: 'OOP: Get methods',
    goal: 'Write get methods that allow safe access to private attributes from outside the class.',
    why: 'Because private attributes cannot be accessed directly from outside the class, you provide get methods (also called getters or accessor methods). These are short methods that simply return the value of one attribute. The exam almost always asks you to write at least one.',
    ideas: [
      'A get method is a regular method that returns one private attribute',
      'The naming convention is getAttributeName, e.g. getSpecies',
      'Get methods always take only self as a parameter',
      'They let outside code read data without being able to change it directly',
    ],
    beginnerTip: 'Imagine a vending machine. You can see the items through the glass (get methods let you see the data), but you cannot reach in and grab them directly (private means no direct access).',
    commonMistakes: [
      'Writing get methods with extra parameters — they only need self',
      'Forgetting return inside the get method — without return, you get None',
      'Calling the method without brackets: tree1.getSpecies instead of tree1.getSpecies()',
      'Trying to access self.__species from outside the class instead of calling the getter',
    ],
    examTip: 'The exam often asks for exactly one get method. Write it neatly: def getX(self): followed by return self.__x on the next line indented.',
    code: `class Tree:\n    def __init__(self, species, height, age):\n        self.__species = species\n        self.__height = height\n        self.__age = age\n\n    def getSpecies(self):\n        return self.__species\n\n    def getHeight(self):\n        return self.__height\n\n    def getAge(self):\n        return self.__age\n\ntree1 = Tree("Oak", 12.5, 80)\nprint(tree1.getSpecies())\nprint(tree1.getHeight())\nprint(tree1.getAge())`,
    io: [
      {
        title: 'Using get methods to read private data',
        input: 'tree1 = Tree("Oak", 12.5, 80)',
        output: 'Oak\n12.5\n80',
      },
      {
        title: 'What happens without brackets when calling a method',
        input: 'print(tree1.getSpecies)',
        output: '<bound method Tree.getSpecies of <__main__.Tree ...>>\n\nAlways call methods WITH brackets: tree1.getSpecies()',
      },
    ],
    challenge: `# Task:\n# Add two get methods to this Student class:\n# getName() should return the name\n# getGrade() should return the grade\n\nclass Student:\n    def __init__(self, name, grade):\n        self.__name = name\n        self.__grade = grade\n\n    # Write getName here\n\n    # Write getGrade here\n\ns1 = Student("Alice", 9)\nprint(s1.getName())\nprint(s1.getGrade())`,
    solution: `class Student:\n    def __init__(self, name, grade):\n        self.__name = name\n        self.__grade = grade\n\n    def getName(self):\n        return self.__name\n\n    def getGrade(self):\n        return self.__grade\n\ns1 = Student("Alice", 9)\nprint(s1.getName())\nprint(s1.getGrade())`,
    recommendations: [
      'Every get method follows the same pattern: def getX(self): then return self.__x.',
      'The exam may say "write a method that returns the species" — this means write a get method.',
      'Never forget return. A method without return gives back None instead of the value.',
    ],
    quiz: [
      {
        question: 'What does a get method do?',
        options: [
          'It changes the value of a private attribute',
          'It deletes the object',
          'It returns the value of a private attribute',
          'It creates a new object',
        ],
        answer: 2,
        explain: 'A get method provides safe read-only access to a private attribute by returning its value.',
      },
      {
        question: 'Which is the correct get method for a private attribute called __score?',
        options: [
          'def getScore(): return score',
          'def getScore(self): return self.__score',
          'def getScore(self): self.__score',
          'def get(self): return __score',
        ],
        answer: 1,
        explain: 'You need self as the parameter and return self.__score (with double underscore) inside the method.',
      },
      {
        question: 'How do you call a get method on an object called obj?',
        options: [
          'obj.getName',
          'getName(obj)',
          'obj.getName()',
          'get obj.name',
        ],
        answer: 2,
        explain: 'You call a method using dot notation with brackets: obj.getName()',
      },
    ],
  },
  {
    id: 'oop-methods',
    title: 'OOP: Writing useful methods',
    goal: 'Add methods to a class that perform actions or calculations on an object\'s own data.',
    why: 'Beyond get methods, classes can have methods that do useful work — like calculating whether a tree is mature, or returning a formatted description. The exam sometimes asks you to add a method that checks a condition, returns a computed value, or prints the object\'s data in a specific format.',
    ideas: [
      'Methods inside a class always have self as their first parameter',
      'They can use self.__attribute to access any private attribute',
      'They can return a value (like a function) or just print something',
      'Methods can check conditions and return True or False',
    ],
    beginnerTip: 'A method is just a function that lives inside a class and knows which object it belongs to — that is what self is for. Every time you call tree1.isMature(), Python secretly passes tree1 as self for you.',
    commonMistakes: [
      'Forgetting self in the method definition',
      'Accessing the attribute without self: writing height instead of self.__height',
      'Mixing up return and print — return sends a value back, print just displays it',
      'Not calling the method correctly — always use objectName.methodName()',
    ],
    examTip: 'If a question says "write a method called isMature that returns True if age > 50", write exactly that method name and logic. Do not rename it.',
    code: `class Tree:\n    def __init__(self, species, height, age):\n        self.__species = species\n        self.__height = height\n        self.__age = age\n\n    def getSpecies(self):\n        return self.__species\n\n    def getAge(self):\n        return self.__age\n\n    def isMature(self):\n        if self.__age > 50:\n            return True\n        else:\n            return False\n\n    def describe(self):\n        return self.__species + " is " + str(self.__age) + " years old"\n\ntree1 = Tree("Oak", 12.5, 80)\ntree2 = Tree("Pine", 8.0, 30)\n\nprint(tree1.isMature())\nprint(tree2.isMature())\nprint(tree1.describe())`,
    io: [
      {
        title: 'Calling methods on objects',
        input: 'tree1 = Tree("Oak", 12.5, 80)\ntree2 = Tree("Pine", 8.0, 30)',
        output: 'True\nFalse\nOak is 80 years old',
      },
    ],
    challenge: `# Task:\n# Add a method called isDistinction to this Student class.\n# It should return True if grade >= 8, otherwise False.\n\nclass Student:\n    def __init__(self, name, grade):\n        self.__name = name\n        self.__grade = grade\n\n    def getName(self):\n        return self.__name\n\n    def getGrade(self):\n        return self.__grade\n\n    # Write isDistinction here\n\ns1 = Student("Alice", 9)\ns2 = Student("Ben", 6)\nprint(s1.isDistinction())\nprint(s2.isDistinction())`,
    solution: `class Student:\n    def __init__(self, name, grade):\n        self.__name = name\n        self.__grade = grade\n\n    def getName(self):\n        return self.__name\n\n    def getGrade(self):\n        return self.__grade\n\n    def isDistinction(self):\n        if self.__grade >= 8:\n            return True\n        else:\n            return False\n\ns1 = Student("Alice", 9)\ns2 = Student("Ben", 6)\nprint(s1.isDistinction())\nprint(s2.isDistinction())`,
    recommendations: [
      'Every method (including __init__) must have self as its first parameter.',
      'Use self.__attributeName inside methods to access private data.',
      'A method that checks a condition should return True or False, not print them.',
    ],
    quiz: [
      {
        question: 'Why does every method need self as its first parameter?',
        options: [
          'It is just a Python rule with no real purpose',
          'It lets the method know which specific object it is working with',
          'It makes the method run faster',
          'It makes the method private',
        ],
        answer: 1,
        explain: 'self refers to the specific object the method was called on, giving access to that object\'s own attributes.',
      },
      {
        question: 'Inside a method, how do you access a private attribute called __age?',
        options: [
          'age',
          '__age',
          'self.age',
          'self.__age',
        ],
        answer: 3,
        explain: 'Inside a class method you always use self.__attributeName to access a private attribute.',
      },
      {
        question: 'What is the difference between return and print inside a method?',
        options: [
          'They do the same thing',
          'return sends a value back to the caller; print only displays it on screen',
          'print sends a value back; return only displays it',
          'return can only be used in __init__',
        ],
        answer: 1,
        explain: 'return gives a value back so other code can use it. print only shows it — the value is lost afterwards.',
      },
    ],
  },
  {
    id: 'oop-objects-list',
    title: 'OOP: Storing objects in a list',
    goal: 'Create multiple objects and store them in a list so you can process them all with a loop.',
    why: 'In Paper 4 exams, a very common task is to read data (often from a file or a set of inputs) and create one object per record, storing all objects in a list. You then loop through that list to find, filter, or process the objects.',
    ideas: [
      'Create an empty list first, then append objects to it',
      'You can create objects directly inside append()',
      'A for loop over the list visits each object one at a time',
      'Call get methods on each object to access its data',
    ],
    beginnerTip: 'This is exactly the same as a list of numbers — except instead of numbers, each item in the list is a full object with its own data and methods. Loop through it exactly the same way.',
    commonMistakes: [
      'Printing the list directly — you get memory addresses, not useful data',
      'Forgetting to call get methods inside the loop',
      'Using range(len(trees)) when a simple for tree in trees loop is cleaner',
      'Overwriting the same variable name instead of appending to the list',
    ],
    examTip: 'The exam question often says "create an array of Tree objects from the data below". This means: make an empty list, then loop through the data and append a new object for each row.',
    code: `class Tree:\n    def __init__(self, species, height, age):\n        self.__species = species\n        self.__height = height\n        self.__age = age\n\n    def getSpecies(self):\n        return self.__species\n\n    def getHeight(self):\n        return self.__height\n\n    def getAge(self):\n        return self.__age\n\n# Simulate data that might come from a file\ndata = [\n    ("Oak",   12.5, 80),\n    ("Pine",   8.0, 30),\n    ("Birch",  5.5, 15),\n    ("Willow", 9.2, 45),\n]\n\n# Build a list of Tree objects\ntrees = []\nfor row in data:\n    trees.append(Tree(row[0], row[1], row[2]))\n\n# Print each tree's details\nfor tree in trees:\n    print(tree.getSpecies(), tree.getHeight(), tree.getAge())`,
    io: [
      {
        title: 'Printing all objects from the list',
        input: 'data has 4 rows',
        output: 'Oak 12.5 80\nPine 8.0 30\nBirch 5.5 15\nWillow 9.2 45',
      },
      {
        title: 'Why you need get methods when printing',
        input: 'print(trees[0])',
        output: '<__main__.Tree object at 0x...>\n\nAlways use trees[0].getSpecies() etc. instead.',
      },
    ],
    challenge: `# Task:\n# Given this data for students:\n# data = [("Alice", 9), ("Ben", 6), ("Cara", 8)]\n#\n# Create a list of Student objects (use your Student class with name and grade).\n# Then loop through the list and print each student's name and grade.\n\nclass Student:\n    def __init__(self, name, grade):\n        self.__name = name\n        self.__grade = grade\n    def getName(self):\n        return self.__name\n    def getGrade(self):\n        return self.__grade\n\ndata = [("Alice", 9), ("Ben", 6), ("Cara", 8)]\n\n# Build the list and print each student`,
    solution: `class Student:\n    def __init__(self, name, grade):\n        self.__name = name\n        self.__grade = grade\n    def getName(self):\n        return self.__name\n    def getGrade(self):\n        return self.__grade\n\ndata = [("Alice", 9), ("Ben", 6), ("Cara", 8)]\n\nstudents = []\nfor row in data:\n    students.append(Student(row[0], row[1]))\n\nfor s in students:\n    print(s.getName(), s.getGrade())`,
    recommendations: [
      'Always start with an empty list and use append() inside a loop.',
      'When printing, loop through the list and call get methods — never print the object directly.',
      'If the question says "read from a file", treat each line as one row of data and create one object per line.',
    ],
    quiz: [
      {
        question: 'What does trees.append(Tree("Oak", 12.5, 80)) do?',
        options: [
          'Replaces all existing items with one new Tree',
          'Creates a new Tree object and adds it to the end of the trees list',
          'Prints the Tree object',
          'Removes the last item from trees',
        ],
        answer: 1,
        explain: 'append() adds a new item to the end of the list. Here the item being added is a new Tree object.',
      },
      {
        question: 'After building a list of Tree objects, how do you print every species?',
        options: [
          'print(trees)',
          'for tree in trees: print(tree)',
          'for tree in trees: print(tree.getSpecies())',
          'print(trees.getSpecies())',
        ],
        answer: 2,
        explain: 'Loop through the list, then call getSpecies() on each individual object.',
      },
    ],
  },
  {
    id: 'oop-filter',
    title: 'OOP: Filtering objects based on criteria',
    goal: 'Search a list of objects and display or collect only those that match a condition.',
    why: 'Almost every A-level OOP question ends with a task like "find all trees older than 50 years" or "list students who achieved a distinction". This means looping through a list of objects, calling a method or getter on each one, and only acting on those that pass a condition.',
    ideas: [
      'Loop through the list with a for loop',
      'Inside the loop, use an if statement to check a condition',
      'Call a get method or a purpose-built method to get the value to check',
      'Either print, count, or collect the matching objects',
    ],
    beginnerTip: 'This is just a loop + if pattern applied to objects. You already know how to loop and use if. The only new part is that you are calling a method instead of using a plain variable in your condition.',
    commonMistakes: [
      'Checking the condition on the list itself instead of on individual objects',
      'Writing tree.age > 50 instead of tree.getAge() > 50 (private attributes need getters)',
      'Forgetting to print or store the matching items after the if condition',
      'Counting items when the question asked to print them, or vice versa',
    ],
    examTip: 'Read the question carefully: does it ask you to print matching objects, count them, or collect them into a new list? Each needs slightly different code.',
    code: `class Tree:\n    def __init__(self, species, height, age):\n        self.__species = species\n        self.__height = height\n        self.__age = age\n\n    def getSpecies(self): return self.__species\n    def getHeight(self):  return self.__height\n    def getAge(self):     return self.__age\n    def isMature(self):   return self.__age > 50\n\ntrees = [\n    Tree("Oak",   12.5, 80),\n    Tree("Pine",   8.0, 30),\n    Tree("Birch",  5.5, 15),\n    Tree("Willow", 9.2, 45),\n    Tree("Yew",    3.1, 200),\n]\n\n# Task 1: print species of mature trees\nprint("Mature trees:")\nfor tree in trees:\n    if tree.isMature():\n        print(tree.getSpecies())\n\n# Task 2: count trees taller than 8 metres\ncount = 0\nfor tree in trees:\n    if tree.getHeight() > 8:\n        count += 1\nprint("Trees taller than 8m:", count)\n\n# Task 3: collect all young trees into a new list\nyoung = []\nfor tree in trees:\n    if tree.getAge() < 40:\n        young.append(tree)\nprint("Young trees:", len(young))`,
    io: [
      {
        title: 'All three filtering tasks',
        input: '5 trees in the list',
        output: 'Mature trees:\nOak\nYew\nTrees taller than 8m: 3\nYoung trees: 2',
      },
    ],
    challenge: `# Task:\n# Given a list of Student objects below, write code to:\n# 1. Print the name of every student with grade >= 8\n# 2. Count how many students have grade < 5\n\nclass Student:\n    def __init__(self, name, grade):\n        self.__name = name\n        self.__grade = grade\n    def getName(self):  return self.__name\n    def getGrade(self): return self.__grade\n\nstudents = [\n    Student("Alice",  9),\n    Student("Ben",    4),\n    Student("Cara",   8),\n    Student("Dan",    3),\n    Student("Eve",    7),\n]\n\n# Write your filtering code here`,
    solution: `class Student:\n    def __init__(self, name, grade):\n        self.__name = name\n        self.__grade = grade\n    def getName(self):  return self.__name\n    def getGrade(self): return self.__grade\n\nstudents = [\n    Student("Alice",  9),\n    Student("Ben",    4),\n    Student("Cara",   8),\n    Student("Dan",    3),\n    Student("Eve",    7),\n]\n\nprint("High achievers:")\nfor s in students:\n    if s.getGrade() >= 8:\n        print(s.getName())\n\ncount = 0\nfor s in students:\n    if s.getGrade() < 5:\n        count += 1\nprint("Students with grade below 5:", count)`,
    recommendations: [
      'Always use get methods in your if condition, not direct attribute access.',
      'Read the question: print, count, or collect? Each needs different code.',
      'If asked to collect matches, make an empty list before the loop and append inside the if.',
    ],
    quiz: [
      {
        question: 'How do you check if a Tree object\'s age is over 50 inside a loop?',
        options: [
          'if tree.__age > 50:',
          'if age > 50:',
          'if tree.getAge() > 50:',
          'if Tree.age > 50:',
        ],
        answer: 2,
        explain: 'Access private data through the get method: tree.getAge(). Direct access with __age fails outside the class.',
      },
      {
        question: 'How do you collect matching objects into a new list?',
        options: [
          'Start with result = [] and use result.append(tree) inside the if block',
          'Print each matching object',
          'Use result = trees automatically',
          'Use sorted(trees)',
        ],
        answer: 0,
        explain: 'Make an empty list before the loop, then append each object that passes the condition.',
      },
      {
        question: 'Which approach correctly counts mature trees?',
        options: [
          'count = len(trees)',
          'for tree in trees: count = 1',
          'count = 0; for tree in trees: if tree.isMature(): count += 1',
          'count = trees.count(isMature)',
        ],
        answer: 2,
        explain: 'Start at 0, loop through all objects, and add 1 only when the condition is True.',
      },
    ],
  },
  {
    id: 'oop-exam',
    title: 'OOP: Full exam-style question',
    goal: 'Write a complete class from a specification, build a list of objects from data, and filter by user criteria — exactly as Paper 4 requires.',
    why: 'Paper 41 Question 2 asked candidates to do all of this in one question: define a class, write a constructor and get methods, create objects from file data, then process the list. This lesson ties everything together so you can practise the full sequence.',
    ideas: [
      'Step 1: read the class specification carefully and write the class with private attributes',
      'Step 2: write __init__ taking all attributes as parameters',
      'Step 3: write one get method per attribute',
      'Step 4: read or simulate the data and build a list of objects',
      'Step 5: loop through the list to process or filter',
    ],
    beginnerTip: 'In the real exam, work through the class diagram first — get the class written and tested before trying to build the list. A small error in the class breaks everything else.',
    commonMistakes: [
      'Writing the class name with a lowercase letter — Python convention is CapitalCase for classes',
      'Missing return in a get method so it returns None',
      'Passing arguments in the wrong order when creating objects',
      'Forgetting that file data is usually strings — you may need int() or float() to convert',
    ],
    examTip: 'The examiner report for Paper 41 Q2 says candidates who failed usually lost marks on the filtering section, not the class definition. Practise the loop+if pattern most.',
    code: `# Full exam-style example\n# Specification:\n#   Class: Book\n#   Attributes: title (String), author (String), pages (Integer), inStock (Boolean)\n#   Methods: constructor, getTitle, getAuthor, getPages, getInStock, isLong (returns True if pages > 300)\n\nclass Book:\n    def __init__(self, title, author, pages, inStock):\n        self.__title   = title\n        self.__author  = author\n        self.__pages   = pages\n        self.__inStock = inStock\n\n    def getTitle(self):   return self.__title\n    def getAuthor(self):  return self.__author\n    def getPages(self):   return self.__pages\n    def getInStock(self): return self.__inStock\n\n    def isLong(self):\n        return self.__pages > 300\n\n# Simulate file data\nraw = [\n    ("Dune",                "Herbert",  412,  True),\n    ("The Hobbit",          "Tolkien",  310,  True),\n    ("Animal Farm",         "Orwell",   112,  False),\n    ("1984",                "Orwell",   328,  True),\n    ("Of Mice and Men",     "Steinbeck", 187, False),\n]\n\n# Build the list\nlibrary = []\nfor row in raw:\n    library.append(Book(row[0], row[1], row[2], row[3]))\n\n# Task A: print titles of long books\nprint("Long books (>300 pages):")\nfor book in library:\n    if book.isLong():\n        print(book.getTitle())\n\n# Task B: list in-stock books by Orwell\nprint("\\nOrwell books in stock:")\nfor book in library:\n    if book.getAuthor() == "Orwell" and book.getInStock():\n        print(book.getTitle())`,
    io: [
      {
        title: 'Full output',
        input: '5 books in the library',
        output: 'Long books (>300 pages):\nDune\nThe Hobbit\n1984\n\nOrwell books in stock:\n1984',
      },
    ],
    challenge: `# Exam-style task:\n# Class: Car\n# Attributes: make (String), year (Integer), mileage (Integer)\n# Methods: getMake, getYear, getMileage, isOld (returns True if year < 2010)\n#\n# Data:\n# cars_data = [\n#   ("Toyota", 2005, 120000),\n#   ("Ford",   2015,  45000),\n#   ("BMW",    2008,  88000),\n#   ("Honda",  2019,  12000),\n# ]\n#\n# 1. Write the full Car class\n# 2. Build a list of Car objects from cars_data\n# 3. Print the make of every old car (year < 2010)\n# 4. Count how many cars have mileage under 50000`,
    solution: `class Car:\n    def __init__(self, make, year, mileage):\n        self.__make    = make\n        self.__year    = year\n        self.__mileage = mileage\n\n    def getMake(self):    return self.__make\n    def getYear(self):    return self.__year\n    def getMileage(self): return self.__mileage\n\n    def isOld(self):\n        return self.__year < 2010\n\ncars_data = [\n    ("Toyota", 2005, 120000),\n    ("Ford",   2015,  45000),\n    ("BMW",    2008,  88000),\n    ("Honda",  2019,  12000),\n]\n\ncars = []\nfor row in cars_data:\n    cars.append(Car(row[0], row[1], row[2]))\n\nprint("Old cars:")\nfor car in cars:\n    if car.isOld():\n        print(car.getMake())\n\ncount = 0\nfor car in cars:\n    if car.getMileage() < 50000:\n        count += 1\nprint("Low mileage cars:", count)`,
    recommendations: [
      'Follow the five-step sequence: class → constructor → getters → build list → filter.',
      'Check your attribute names match the specification exactly.',
      'Test with a small dataset first. If your class works for one object, it will work for fifty.',
    ],
    quiz: [
      {
        question: 'In which order should you write an OOP solution in the exam?',
        options: [
          'Filter first, then write the class',
          'Class definition → constructor → getters → build list → filter/process',
          'Build the list first, then add getters',
          'Write the filter loop first so you know what methods you need',
        ],
        answer: 1,
        explain: 'Always write the class structure first. The list and filtering depend on the class being correct.',
      },
      {
        question: 'File data is often read as strings. If you need an integer, what should you do?',
        options: [
          'Python converts it automatically',
          'Use int() to convert the string to an integer before passing it to the constructor',
          'Store it as a string and convert later',
          'Strings and integers can be used interchangeably',
        ],
        answer: 1,
        explain: 'Input and file data arrives as strings. Wrap with int() or float() when you need a number.',
      },
      {
        question: 'Why do the examiner reports say candidates lose most marks on the filtering section?',
        options: [
          'Because the class diagram is always wrong',
          'Because candidates forget to write the class',
          'Because they get the loop+if+getter pattern wrong even when the class is correct',
          'Because filtering is not on the syllabus',
        ],
        answer: 2,
        explain: 'The class is often written well but the final loop+if logic is where marks are dropped. Practise that part most.',
      },
    ],
  },
];

const labExercises = [
  {
    id: 'lab-lists',
    topic: 'Declaring and filling lists',
    description: 'Ask for 3 numbers, store them in a list, then print the list.',
    input: '5\n9\n2',
    expectedOutput: '[5, 9, 2]',
    starterCode: `numbers = []\nfor i in range(3):\n    value = int(input("Enter a number: "))\n    numbers.append(value)\n\nprint(numbers)`,
    answerCode: `numbers = []\nfor i in range(3):\n    value = int(input("Enter a number: "))\n    numbers.append(value)\n\nprint(numbers)`,
    hint: 'Use an empty list first, then append() each value inside a loop.',
  },
  {
    id: 'lab-validation',
    topic: 'Input validation loop',
    description: 'Keep asking until a mark from 0 to 100 is entered.',
    input: '145\n-3\n88',
    expectedOutput: 'Invalid input. Try again.\nInvalid input. Try again.\nAccepted mark: 88',
    starterCode: `mark = int(input("Enter a mark from 0 to 100: "))\n\n# Write a validation loop here\n\nprint("Accepted mark:", mark)`,
    answerCode: `mark = int(input("Enter a mark from 0 to 100: "))\n\nwhile mark < 0 or mark > 100:\n    print("Invalid input. Try again.")\n    mark = int(input("Enter a mark from 0 to 100: "))\n\nprint("Accepted mark:", mark)`,
    hint: 'Your loop should continue while the value is outside the valid range.',
  },
  {
    id: 'lab-bubble',
    topic: 'Bubble sort',
    description: 'Sort the list into ascending order using bubble sort.',
    input: '',
    expectedOutput: '[1, 2, 4, 5, 8]',
    starterCode: `numbers = [5, 1, 4, 2, 8]\n\n# Write bubble sort here\n\nprint(numbers)`,
    answerCode: `numbers = [5, 1, 4, 2, 8]\n\nfor pass_num in range(len(numbers) - 1):\n    for i in range(len(numbers) - 1 - pass_num):\n        if numbers[i] > numbers[i + 1]:\n            temp = numbers[i]\n            numbers[i] = numbers[i + 1]\n            numbers[i + 1] = temp\n\nprint(numbers)`,
    hint: 'Compare neighbouring items and swap when the left value is bigger than the right value.',
  },
  {
    id: 'lab-binary',
    topic: 'Binary search',
    description: 'Search for 15 in a sorted list and print True if found.',
    input: '',
    expectedOutput: 'True',
    starterCode: `numbers = [3, 7, 9, 12, 15, 18, 21]\ntarget = 15\nlow = 0\nhigh = len(numbers) - 1\nfound = False\n\n# Write binary search here\n\nprint(found)`,
    answerCode: `numbers = [3, 7, 9, 12, 15, 18, 21]\ntarget = 15\nlow = 0\nhigh = len(numbers) - 1\nfound = False\n\nwhile low <= high and found == False:\n    mid = (low + high) // 2\n    if numbers[mid] == target:\n        found = True\n    elif numbers[mid] < target:\n        low = mid + 1\n    else:\n        high = mid - 1\n\nprint(found)`,
    hint: 'Find the middle index first, then decide whether to move left or right.',
  },
  {
    id: 'lab-output',
    topic: 'Clear output',
    description: 'Print each colour on a separate line with a number in front.',
    input: '',
    expectedOutput: '1. red\n2. blue\n3. green',
    starterCode: `colours = ["red", "blue", "green"]\n\n# Print each item clearly with numbering`,
    answerCode: `colours = ["red", "blue", "green"]\n\nfor i in range(len(colours)):\n    print(i + 1, ".", colours[i], sep="")`,
    hint: 'Use a loop and print(i + 1, ...) so the numbering starts at 1.',
  },
  {
    id: 'lab-testing',
    topic: 'Testing with shown inputs and outputs',
    description: 'Run a simple function against multiple test cases and print the results.',
    input: '',
    expectedOutput: '9\n12\n-2',
    starterCode: `def largest_value(numbers):\n    # Return the largest value in the list\n    pass\n\nprint(largest_value([4, 9, 1, 7]))\nprint(largest_value([12, 12, 12]))\nprint(largest_value([-5, -2, -9]))`,
    answerCode: `def largest_value(numbers):\n    largest = numbers[0]\n    for item in numbers:\n        if item > largest:\n            largest = item\n    return largest\n\nprint(largest_value([4, 9, 1, 7]))\nprint(largest_value([12, 12, 12]))\nprint(largest_value([-5, -2, -9]))`,
    hint: 'Start by assuming the first item is largest, then loop through the list.',
  },

  {
    id: 'lab-recursion-countdown',
    topic: 'Recursion: countdown',
    description: 'Write a recursive countdown function that prints down to 1 and then prints Lift off!',
    input: '',
    expectedOutput: '4\n3\n2\n1\nLift off!',
    starterCode: `def countdown(n):\n    # Write the base case and recursive case\n    pass\n\ncountdown(4)`,
    answerCode: `def countdown(n):\n    if n == 0:\n        print("Lift off!")\n    else:\n        print(n)\n        countdown(n - 1)\n\ncountdown(4)`,
    hint: 'Print n first, then call the function again with n - 1. Stop at 0.',
  },
  {
    id: 'lab-recursion-factorial',
    topic: 'Recursion: factorial',
    description: 'Return the factorial of a number using recursion.',
    input: '',
    expectedOutput: '120',
    starterCode: `def factorial(n):\n    # Base case\n\n    # Recursive case\n\nprint(factorial(5))`,
    answerCode: `def factorial(n):\n    if n == 1:\n        return 1\n    else:\n        return n * factorial(n - 1)\n\nprint(factorial(5))`,
    hint: 'Use 1 as the base case, then return n * factorial(n - 1).',
  },
  {
    id: 'lab-recursion-sumlist',
    topic: 'Recursion: sum a list',
    description: 'Return the total of a list by solving a smaller subproblem each time.',
    input: '',
    expectedOutput: '15',
    starterCode: `def total_list(numbers):\n    # Base case\n\n    # Recursive case\n\nprint(total_list([4, 5, 6]))`,
    answerCode: `def total_list(numbers):\n    if len(numbers) == 0:\n        return 0\n    else:\n        return numbers[0] + total_list(numbers[1:])\n\nprint(total_list([4, 5, 6]))`,
    hint: 'Use an empty list as the base case, then add the first item to the recursive result of the rest.',
  },

  // OOP LAB EXERCISES
  {
    id: 'lab-oop-class',
    topic: 'OOP: Write a class',
    description: 'Complete the Tree class with private attributes, a constructor, and get methods. Then create one object and print its species.',
    input: '',
    expectedOutput: 'Oak',
    starterCode: `class Tree:\n    def __init__(self, species, height, age):\n        # Store each as a private attribute using self.__name = value\n        pass\n\n    def getSpecies(self):\n        # Return the species\n        pass\n\n    def getHeight(self):\n        # Return the height\n        pass\n\n    def getAge(self):\n        # Return the age\n        pass\n\n# Create: tree1 = Tree("Oak", 12.5, 80)\n# Print tree1.getSpecies()`,
    answerCode: `class Tree:\n    def __init__(self, species, height, age):\n        self.__species = species\n        self.__height  = height\n        self.__age     = age\n\n    def getSpecies(self):\n        return self.__species\n\n    def getHeight(self):\n        return self.__height\n\n    def getAge(self):\n        return self.__age\n\ntree1 = Tree("Oak", 12.5, 80)\nprint(tree1.getSpecies())`,
    hint: 'In __init__, write self.__species = species (double underscore). In getSpecies, write return self.__species. Then call tree1 = Tree("Oak", 12.5, 80).',
  },
  {
    id: 'lab-oop-method',
    topic: 'OOP: Add a method',
    description: 'Add isMature() that returns True if age > 50. Test it on two trees.',
    input: '',
    expectedOutput: 'True\nFalse',
    starterCode: `class Tree:\n    def __init__(self, species, height, age):\n        self.__species = species\n        self.__height  = height\n        self.__age     = age\n\n    def getAge(self):\n        return self.__age\n\n    def isMature(self):\n        # Return True if self.__age > 50, otherwise False\n        pass\n\ntree1 = Tree("Oak",  12.5, 80)\ntree2 = Tree("Pine",  8.0, 30)\nprint(tree1.isMature())\nprint(tree2.isMature())`,
    answerCode: `class Tree:\n    def __init__(self, species, height, age):\n        self.__species = species\n        self.__height  = height\n        self.__age     = age\n\n    def getAge(self):\n        return self.__age\n\n    def isMature(self):\n        if self.__age > 50:\n            return True\n        else:\n            return False\n\ntree1 = Tree("Oak",  12.5, 80)\ntree2 = Tree("Pine",  8.0, 30)\nprint(tree1.isMature())\nprint(tree2.isMature())`,
    hint: 'Inside isMature, use self.__age (not self.age). Check if self.__age > 50 and return True or False.',
  },
  {
    id: 'lab-oop-list',
    topic: 'OOP: Build a list of objects',
    description: 'Create a list of Tree objects from the data provided, then print every species.',
    input: '',
    expectedOutput: 'Oak\nPine\nBirch\nWillow',
    starterCode: `class Tree:\n    def __init__(self, species, height, age):\n        self.__species = species\n        self.__height  = height\n        self.__age     = age\n    def getSpecies(self): return self.__species\n    def getHeight(self):  return self.__height\n    def getAge(self):     return self.__age\n\ndata = [\n    ("Oak",    12.5, 80),\n    ("Pine",    8.0, 30),\n    ("Birch",   5.5, 15),\n    ("Willow",  9.2, 45),\n]\n\n# 1. Create trees = []\n# 2. Loop through data and append Tree objects\n# 3. Loop through trees and print each species`,
    answerCode: `class Tree:\n    def __init__(self, species, height, age):\n        self.__species = species\n        self.__height  = height\n        self.__age     = age\n    def getSpecies(self): return self.__species\n    def getHeight(self):  return self.__height\n    def getAge(self):     return self.__age\n\ndata = [\n    ("Oak",    12.5, 80),\n    ("Pine",    8.0, 30),\n    ("Birch",   5.5, 15),\n    ("Willow",  9.2, 45),\n]\n\ntrees = []\nfor row in data:\n    trees.append(Tree(row[0], row[1], row[2]))\n\nfor tree in trees:\n    print(tree.getSpecies())`,
    hint: 'Start with trees = []. In the loop: trees.append(Tree(row[0], row[1], row[2])). Then for tree in trees: print(tree.getSpecies())',
  },
  {
    id: 'lab-oop-filter',
    topic: 'OOP: Filter objects',
    description: 'Print the species of every tree with age > 50.',
    input: '',
    expectedOutput: 'Oak\nYew',
    starterCode: `class Tree:\n    def __init__(self, species, height, age):\n        self.__species = species\n        self.__age     = age\n    def getSpecies(self): return self.__species\n    def getAge(self):     return self.__age\n    def isMature(self):   return self.__age > 50\n\ntrees = [\n    Tree("Oak",    80),\n    Tree("Pine",   30),\n    Tree("Birch",  15),\n    Tree("Willow", 45),\n    Tree("Yew",   200),\n]\n\n# Loop through trees\n# Use if tree.isMature(): to check\n# Print tree.getSpecies() for matching trees`,
    answerCode: `class Tree:\n    def __init__(self, species, age):\n        self.__species = species\n        self.__age     = age\n    def getSpecies(self): return self.__species\n    def getAge(self):     return self.__age\n    def isMature(self):   return self.__age > 50\n\ntrees = [\n    Tree("Oak",    80),\n    Tree("Pine",   30),\n    Tree("Birch",  15),\n    Tree("Willow", 45),\n    Tree("Yew",   200),\n]\n\nfor tree in trees:\n    if tree.isMature():\n        print(tree.getSpecies())`,
    hint: 'Loop: for tree in trees. Condition: if tree.isMature(). Action: print(tree.getSpecies()). Three lines of code.',
  },
];

function CodeBlock({ code }) {
  return (
    <pre className="overflow-x-auto rounded-2xl border border-slate-200 bg-slate-950 p-4 text-sm leading-6 text-slate-100">
      <code>{code}</code>
    </pre>
  );
}

function Pill({ children }) {
  return <span className="inline-flex items-center rounded-full border border-slate-300 px-3 py-1 text-xs font-medium text-slate-700">{children}</span>;
}

function ExampleIO({ title, input, output }) {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4 md:grid-cols-2">
        <div>
          <p className="mb-2 text-sm font-semibold text-slate-700">Shown input</p>
          <pre className="min-h-[100px] whitespace-pre-wrap rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-800">{input}</pre>
        </div>
        <div>
          <p className="mb-2 text-sm font-semibold text-slate-700">Expected output</p>
          <pre className="min-h-[100px] whitespace-pre-wrap rounded-xl border border-slate-200 bg-emerald-50 p-3 text-sm text-slate-800">{output}</pre>
        </div>
      </CardContent>
    </Card>
  );
}

function QuizBlock({ lessonId, questions, answers, setAnswers }) {
  const lessonScore = questions.reduce((count, q, index) => {
    const selected = answers[`${lessonId}-${index}`];
    return count + (selected === q.answer ? 1 : 0);
  }, 0);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4">
        <div>
          <h3 className="font-semibold text-slate-900">Quick quiz</h3>
          <p className="text-sm text-slate-600">Choose an answer and get instant feedback.</p>
        </div>
        <Pill>Score: {lessonScore}/{questions.length}</Pill>
      </div>

      {questions.map((q, index) => {
        const key = `${lessonId}-${index}`;
        const selected = answers[key];
        const answered = selected !== undefined;
        const correct = selected === q.answer;

        return (
          <Card key={key} className="rounded-2xl shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">{index + 1}. {q.question}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid gap-2">
                {q.options.map((option, optIndex) => {
                  const active = selected === optIndex;
                  return (
                    <button
                      key={option}
                      onClick={() => setAnswers((prev) => ({ ...prev, [key]: optIndex }))}
                      className={`rounded-xl border px-4 py-3 text-left text-sm transition ${active ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-200 bg-white hover:bg-slate-50'}`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>

              {answered && (
                <div className={`rounded-xl border border-slate-200 p-3 text-sm ${correct ? 'bg-emerald-50' : 'bg-amber-50'}`}>
                  <p className="font-medium">{correct ? 'Correct' : 'Not quite'}</p>
                  <p className="mt-1 text-slate-700">{q.explain}</p>
                </div>
              )}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

function computeBubbleTrace(values) {
  const arr = [...values];
  const states = [{ label: 'Start', array: [...arr], active: [] }];

  for (let pass = 0; pass < arr.length - 1; pass += 1) {
    for (let i = 0; i < arr.length - 1 - pass; i += 1) {
      const shouldSwap = arr[i] > arr[i + 1];
      if (shouldSwap) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
      states.push({
        label: shouldSwap ? `Pass ${pass + 1}, compare ${i} and ${i + 1} -> swap` : `Pass ${pass + 1}, compare ${i} and ${i + 1} -> keep`,
        array: [...arr],
        active: [i, i + 1],
      });
    }
  }

  return states;
}

function BubbleSortDemo() {
  const [raw, setRaw] = useState('5, 1, 4, 2, 8');
  const [step, setStep] = useState(0);

  const numbers = useMemo(() => raw.split(',').map((n) => Number(n.trim())).filter((n) => !Number.isNaN(n)), [raw]);
  const trace = useMemo(() => computeBubbleTrace(numbers), [numbers]);
  const current = trace[Math.min(step, trace.length - 1)] || trace[0];

  return (
    <Card className="rounded-2xl shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg"><RefreshCw className="h-5 w-5" /> Bubble sort step-through</CardTitle>
        <CardDescription>Enter comma-separated numbers and move through each comparison.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input value={raw} onChange={(e) => { setRaw(e.target.value); setStep(0); }} placeholder="Example: 5, 1, 4, 2, 8" />
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <p className="mb-3 text-sm font-medium text-slate-700">{current?.label}</p>
          <div className="flex flex-wrap gap-3">
            {current?.array.map((value, index) => (
              <div key={`${value}-${index}-${step}`} className={`flex h-12 min-w-12 items-center justify-center rounded-xl border px-4 font-semibold ${current.active.includes(index) ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-200 bg-white text-slate-900'}`}>
                {value}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" onClick={() => setStep((s) => Math.max(0, s - 1))}>Previous</Button>
          <Button onClick={() => setStep((s) => Math.min(trace.length - 1, s + 1))}>Next</Button>
          <Button variant="outline" onClick={() => setStep(0)}>Reset</Button>
        </div>
        <p className="text-sm text-slate-600">Step {Math.min(step + 1, trace.length)} of {trace.length}</p>
      </CardContent>
    </Card>
  );
}

function computeBinaryTrace(values, target) {
  const states = [];
  let low = 0;
  let high = values.length - 1;
  let found = false;

  while (low <= high && !found) {
    const mid = Math.floor((low + high) / 2);
    const middleValue = values[mid];
    let action = '';

    if (middleValue === target) {
      action = `Found ${target} at index ${mid}`;
      found = true;
    } else if (middleValue < target) {
      action = `${middleValue} is too small, search right half`;
      states.push({ low, mid, high, action, values: [...values] });
      low = mid + 1;
      continue;
    } else {
      action = `${middleValue} is too large, search left half`;
      states.push({ low, mid, high, action, values: [...values] });
      high = mid - 1;
      continue;
    }

    states.push({ low, mid, high, action, values: [...values] });
  }

  if (!found) {
    states.push({ low, mid: -1, high, action: `${target} was not found`, values: [...values] });
  }

  return states.length ? states : [{ low: 0, mid: -1, high: values.length - 1, action: 'Enter values to begin', values: [...values] }];
}

function BinarySearchDemo() {
  const [raw, setRaw] = useState('3, 7, 9, 12, 15, 18, 21');
  const [target, setTarget] = useState('15');
  const [step, setStep] = useState(0);

  const values = useMemo(() => raw.split(',').map((n) => Number(n.trim())).filter((n) => !Number.isNaN(n)), [raw]);
  const numericTarget = Number(target);
  const trace = useMemo(() => computeBinaryTrace(values, numericTarget), [values, numericTarget]);
  const current = trace[Math.min(step, trace.length - 1)] || trace[0];

  return (
    <Card className="rounded-2xl shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg"><Search className="h-5 w-5" /> Binary search step-through</CardTitle>
        <CardDescription>Use a sorted list only. Move through each middle check.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-3 md:grid-cols-[1fr_160px]">
          <Input value={raw} onChange={(e) => { setRaw(e.target.value); setStep(0); }} placeholder="Sorted numbers" />
          <Input value={target} onChange={(e) => { setTarget(e.target.value); setStep(0); }} placeholder="Target" />
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <div className="mb-3 flex flex-wrap gap-3">
            {current.values.map((value, index) => {
              const isLow = index === current.low;
              const isMid = index === current.mid;
              const isHigh = index === current.high;
              return (
                <div key={`${value}-${index}`} className="space-y-1 text-center">
                  <div className="text-xs text-slate-500">{index}</div>
                  <div className={`flex h-12 min-w-12 items-center justify-center rounded-xl border px-4 font-semibold ${isMid ? 'border-slate-900 bg-slate-900 text-white' : isLow || isHigh ? 'border-slate-200 bg-amber-50 text-slate-900' : 'border-slate-200 bg-white text-slate-900'}`}>
                    {value}
                  </div>
                  <div className="text-[10px] uppercase tracking-wide text-slate-500">{isLow ? 'low' : isMid ? 'mid' : isHigh ? 'high' : ''}</div>
                </div>
              );
            })}
          </div>
          <p className="text-sm font-medium text-slate-700">{current.action}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" onClick={() => setStep((s) => Math.max(0, s - 1))}>Previous</Button>
          <Button onClick={() => setStep((s) => Math.min(trace.length - 1, s + 1))}>Next</Button>
          <Button variant="outline" onClick={() => setStep(0)}>Reset</Button>
        </div>
        <p className="text-sm text-slate-600">Step {Math.min(step + 1, trace.length)} of {trace.length}</p>
      </CardContent>
    </Card>
  );
}

function ValidationSimulator() {
  const [attempts, setAttempts] = useState('145, -3, 88');
  const [min, setMin] = useState('0');
  const [max, setMax] = useState('100');

  const rows = useMemo(() => {
    const minValue = Number(min);
    const maxValue = Number(max);
    return attempts
      .split(',')
      .map((v) => Number(v.trim()))
      .filter((v) => !Number.isNaN(v))
      .map((value, index) => ({
        value,
        step: index + 1,
        valid: value >= minValue && value <= maxValue,
      }));
  }, [attempts, min, max]);

  return (
    <Card className="rounded-2xl shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg"><ListChecks className="h-5 w-5" /> Validation loop simulator</CardTitle>
        <CardDescription>See which attempts are rejected and where the loop finally accepts a value.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-3 md:grid-cols-[1fr_100px_100px]">
          <Input value={attempts} onChange={(e) => setAttempts(e.target.value)} placeholder="Attempts e.g. 145, -3, 88" />
          <Input value={min} onChange={(e) => setMin(e.target.value)} placeholder="Min" />
          <Input value={max} onChange={(e) => setMax(e.target.value)} placeholder="Max" />
        </div>
        <div className="space-y-2">
          {rows.map((row) => (
            <div key={`${row.step}-${row.value}`} className={`rounded-xl border border-slate-200 p-3 text-sm ${row.valid ? 'bg-emerald-50' : 'bg-rose-50'}`}>
              Attempt {row.step}: {row.value} {row.valid ? '-> accepted, loop stops' : '-> invalid, loop repeats'}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function TestBench() {
  const cases = [
    {
      title: 'List filling',
      code: 'Add 3 numbers to a list and print it',
      tests: [
        { input: '5, 9, 2', expected: '[5, 9, 2]' },
        { input: '10, 10, 10', expected: '[10, 10, 10]' },
      ],
    },
    {
      title: 'Input validation',
      code: 'Accept only marks from 0 to 100',
      tests: [
        { input: '145, -3, 88', expected: 'Accepted mark: 88' },
        { input: '73', expected: 'Accepted mark: 73' },
      ],
    },
    {
      title: 'Bubble sort',
      code: 'Sort ascending',
      tests: [
        { input: '[5, 1, 4, 2, 8]', expected: '[1, 2, 4, 5, 8]' },
        { input: '[3, 3, 1]', expected: '[1, 3, 3]' },
      ],
    },
    {
      title: 'Binary search',
      code: 'Search for 15 in a sorted list',
      tests: [
        { input: 'numbers = [3, 7, 9, 12, 15, 18, 21], target = 15', expected: 'True' },
        { input: 'numbers = [3, 7, 9, 12, 15, 18, 21], target = 8', expected: 'False' },
      ],
    },
    {
      title: 'Recursion',
      code: 'Evaluate factorial(5) recursively',
      tests: [
        { input: 'factorial(5)', expected: '120' },
        { input: 'sum_to_n(4)', expected: '10' },
      ],
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Card className="rounded-2xl shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg">Testing board</CardTitle>
        <CardDescription>Use these shown inputs and outputs to practise checking your logic.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-4">
          {cases.map((item, index) => (
            <button
              key={item.title}
              onClick={() => setOpenIndex(index)}
              className={`rounded-xl border p-3 text-left text-sm transition ${openIndex === index ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-200 bg-white hover:bg-slate-50'}`}
            >
              <div className="font-semibold">{item.title}</div>
              <div className={`mt-1 ${openIndex === index ? 'text-slate-200' : 'text-slate-500'}`}>{item.code}</div>
            </button>
          ))}
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          {cases[openIndex].tests.map((test, idx) => (
            <div key={idx} className="mb-3 rounded-xl border border-slate-200 bg-white p-3 last:mb-0">
              <div className="text-sm font-medium text-slate-700">Test {idx + 1}</div>
              <div className="mt-2 grid gap-3 md:grid-cols-2">
                <div>
                  <div className="mb-1 text-xs uppercase tracking-wide text-slate-500">Input</div>
                  <pre className="whitespace-pre-wrap rounded-lg bg-slate-50 p-3 text-sm">{test.input}</pre>
                </div>
                <div>
                  <div className="mb-1 text-xs uppercase tracking-wide text-slate-500">Expected output</div>
                  <pre className="whitespace-pre-wrap rounded-lg bg-emerald-50 p-3 text-sm">{test.expected}</pre>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}


function computeFactorialTraceEvents(inputValue) {
  const n = Math.max(1, Math.min(6, Math.floor(Number(inputValue) || 1)));
  const events = [];
  const stack = [];

  function helper(value) {
    stack.push(`factorial(${value})`);
    events.push({
      label: `Call factorial(${value})`,
      stack: [...stack],
      explanation: value === 1 ? 'This is the base case, so no more recursive calls are needed.' : `Recursive case: keep the current ${value} and call factorial(${value - 1}).`,
    });

    if (value === 1) {
      events.push({
        label: 'Base case returns 1',
        stack: [...stack],
        explanation: 'The base case returns 1 and starts the unwinding phase.',
        result: 1,
      });
      stack.pop();
      return 1;
    }

    const childResult = helper(value - 1);
    const result = value * childResult;
    events.push({
      label: `Unwind factorial(${value})`,
      stack: [...stack],
      explanation: `${value} waits for factorial(${value - 1}) to finish, then returns ${value} * ${childResult} = ${result}.`,
      result,
    });
    stack.pop();
    return result;
  }

  const finalResult = helper(n);
  events.push({
    label: `Final answer for factorial(${n})`,
    stack: [],
    explanation: `All calls have finished. The final returned value is ${finalResult}.`,
    result: finalResult,
  });
  return events;
}

function RecursionTraceDemo() {
  const [value, setValue] = useState('4');
  const [step, setStep] = useState(0);

  const events = useMemo(() => computeFactorialTraceEvents(value), [value]);
  const current = events[Math.min(step, events.length - 1)];

  useEffect(() => {
    setStep(0);
  }, [value]);

  return (
    <Card className="rounded-2xl shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg">Recursion trace explorer</CardTitle>
        <CardDescription>Step through a recursive factorial call to see the downward calls and the upward returns.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-3 md:grid-cols-[180px_1fr]">
          <Input value={value} onChange={(e) => setValue(e.target.value)} placeholder="Use 1 to 6" />
          <CodeBlock code={`def factorial(n):\n    if n == 1:\n        return 1\n    else:\n        return n * factorial(n - 1)`} />
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <p className="mb-2 text-sm font-semibold text-slate-700">{current.label}</p>
          <p className="mb-4 text-sm text-slate-700">{current.explanation}</p>

          <div>
            <p className="mb-2 text-xs uppercase tracking-wide text-slate-500">Active call stack</p>
            <div className="flex flex-wrap gap-2">
              {(current.stack.length ? [...current.stack].reverse() : ['Stack empty']).map((frame, index) => (
                <div key={`${frame}-${index}`} className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-800">
                  {index === 0 && current.stack.length ? 'Top -> ' : ''}{frame}
                </div>
              ))}
            </div>
          </div>

          {current.result !== undefined && (
            <div className="mt-4 rounded-xl border border-slate-200 bg-emerald-50 p-3 text-sm text-slate-800">
              Current returned value: {current.result}
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          <Button variant="outline" onClick={() => setStep((s) => Math.max(0, s - 1))}>Previous</Button>
          <Button onClick={() => setStep((s) => Math.min(events.length - 1, s + 1))}>Next</Button>
          <Button variant="outline" onClick={() => setStep(0)}>Reset</Button>
        </div>
        <p className="text-sm text-slate-600">Step {Math.min(step + 1, events.length)} of {events.length}</p>
      </CardContent>
    </Card>
  );
}

function computeStackEvents(inputValue) {
  const n = Math.max(1, Math.min(6, Math.floor(Number(inputValue) || 1)));
  const events = [];
  const stack = [];

  function helper(value) {
    stack.push(`factorial(${value})`);
    events.push({
      label: `Push factorial(${value}) onto the stack`,
      stack: [...stack],
      explanation: 'Every recursive call gets its own stack frame.',
    });

    if (value === 1) {
      events.push({
        label: 'Base case reached',
        stack: [...stack],
        explanation: 'factorial(1) returns 1. No more calls are made, so unwinding can begin.',
        result: 1,
      });
      stack.pop();
      events.push({
        label: 'Pop factorial(1) after returning 1',
        stack: [...stack],
        explanation: 'The most recent frame leaves the stack first.',
        result: 1,
      });
      return 1;
    }

    const childResult = helper(value - 1);
    const result = value * childResult;
    events.push({
      label: `Resume factorial(${value})`,
      stack: [...stack],
      explanation: `This frame was waiting for the child result ${childResult}. It now returns ${result}.`,
      result,
    });
    stack.pop();
    events.push({
      label: `Pop factorial(${value}) after returning ${result}`,
      stack: [...stack],
      explanation: 'The stack unwinds in last-in, first-out order.',
      result,
    });
    return result;
  }

  helper(n);
  return events;
}

function RecursionStackDemo() {
  const [value, setValue] = useState('4');
  const [step, setStep] = useState(0);

  const events = useMemo(() => computeStackEvents(value), [value]);
  const current = events[Math.min(step, events.length - 1)];

  useEffect(() => {
    setStep(0);
  }, [value]);

  return (
    <Card className="rounded-2xl shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg">Stack and unwinding visualiser</CardTitle>
        <CardDescription>See frames pushed onto the call stack and then removed again during unwinding.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input value={value} onChange={(e) => setValue(e.target.value)} placeholder="Use 1 to 6" />

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <p className="mb-2 text-sm font-semibold text-slate-700">{current.label}</p>
          <p className="mb-4 text-sm text-slate-700">{current.explanation}</p>

          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="mb-3 text-xs uppercase tracking-wide text-slate-500">Stack frames</p>
            <div className="flex min-h-[120px] flex-col-reverse gap-2">
              {current.stack.length === 0 ? (
                <div className="rounded-xl border border-dashed border-slate-300 p-3 text-sm text-slate-500">Stack empty</div>
              ) : (
                current.stack.map((frame, index) => (
                  <div key={`${frame}-${index}`} className="rounded-xl border border-slate-200 bg-slate-900 px-4 py-3 text-sm font-medium text-white">
                    {frame}
                  </div>
                ))
              )}
            </div>
          </div>

          {current.result !== undefined && (
            <div className="mt-4 rounded-xl border border-slate-200 bg-emerald-50 p-3 text-sm text-slate-800">
              Returned value at this stage: {current.result}
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          <Button variant="outline" onClick={() => setStep((s) => Math.max(0, s - 1))}>Previous</Button>
          <Button onClick={() => setStep((s) => Math.min(events.length - 1, s + 1))}>Next</Button>
          <Button variant="outline" onClick={() => setStep(0)}>Reset</Button>
        </div>
        <p className="text-sm text-slate-600">Step {Math.min(step + 1, events.length)} of {events.length}</p>
      </CardContent>
    </Card>
  );
}

function RecursionUseCases() {
  const cases = [
    {
      prompt: 'Traversing folders inside folders',
      answer: 'useful',
      reason: 'This is a nested tree structure, so recursion is a natural fit.',
    },
    {
      prompt: 'Printing numbers 1 to 10 once',
      answer: 'not-best',
      reason: 'A loop is usually simpler and easier to read here.',
    },
    {
      prompt: 'Walking a family tree',
      answer: 'useful',
      reason: 'Each person can lead to smaller linked branches of the same structure.',
    },
    {
      prompt: 'Adding two fixed numbers',
      answer: 'not-best',
      reason: 'Recursion adds unnecessary overhead for a tiny non-recursive task.',
    },
  ];

  const [answers, setAnswers] = useState({});

  return (
    <Card className="rounded-2xl shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg">When is recursion a good fit?</CardTitle>
        <CardDescription>Choose whether recursion is useful or not the best choice, then check the reasoning.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {cases.map((item, index) => {
          const selected = answers[index];
          const correct = selected === item.answer;
          return (
            <div key={item.prompt} className="rounded-2xl border border-slate-200 p-4">
              <p className="font-medium text-slate-900">{item.prompt}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Button variant={selected === 'useful' ? 'default' : 'outline'} onClick={() => setAnswers((prev) => ({ ...prev, [index]: 'useful' }))}>Useful</Button>
                <Button variant={selected === 'not-best' ? 'default' : 'outline'} onClick={() => setAnswers((prev) => ({ ...prev, [index]: 'not-best' }))}>Not the best</Button>
              </div>
              {selected && (
                <div className={`mt-3 rounded-xl border border-slate-200 p-3 text-sm ${correct ? 'bg-emerald-50' : 'bg-amber-50'}`}>
                  <p className="font-medium">{correct ? 'Correct' : 'Try again next time'}</p>
                  <p className="mt-1 text-slate-700">{item.reason}</p>
                </div>
              )}
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}

function builtinRead(file) {
  if (window.Sk && window.Sk.builtinFiles && window.Sk.builtinFiles.files[file]) {
    return window.Sk.builtinFiles.files[file];
  }
  throw new Error(`File not found: ${file}`);
}

function useSkulptLoader() {
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.Sk && window.Sk.builtinFiles) {
      setStatus('ready');
      return;
    }

    const onReadyCheck = () => {
      if (window.Sk && window.Sk.builtinFiles) {
        setStatus('ready');
      }
    };

    const loadStdlib = () => {
      if (document.querySelector('script[data-skulpt="stdlib"]')) {
        onReadyCheck();
        return;
      }
      const stdlib = document.createElement('script');
      stdlib.src = 'https://cdn.jsdelivr.net/npm/skulpt@1.2.0/dist/skulpt-stdlib.js';
      stdlib.async = true;
      stdlib.dataset.skulpt = 'stdlib';
      stdlib.onload = onReadyCheck;
      stdlib.onerror = () => setStatus('error');
      document.body.appendChild(stdlib);
    };

    if (!document.querySelector('script[data-skulpt="core"]')) {
      const core = document.createElement('script');
      core.src = 'https://cdn.jsdelivr.net/npm/skulpt@1.2.0/dist/skulpt.min.js';
      core.async = true;
      core.dataset.skulpt = 'core';
      core.onload = loadStdlib;
      core.onerror = () => setStatus('error');
      document.body.appendChild(core);
    } else if (!document.querySelector('script[data-skulpt="stdlib"]')) {
      loadStdlib();
    } else {
      onReadyCheck();
    }
  }, []);

  return status;
}

function normalizeText(text) {
  return text.replace(/\s+$/g, '').trim();
}

function PracticeLab() {
  const runnerStatus = useSkulptLoader();
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [code, setCode] = useState(labExercises[0].starterCode);
  const [inputText, setInputText] = useState(labExercises[0].input);
  const [output, setOutput] = useState('Run code to see the result here.');
  const [showAnswer, setShowAnswer] = useState(false);
  const [running, setRunning] = useState(false);

  const exercise = labExercises[exerciseIndex];
  const outputMatches = normalizeText(output) === normalizeText(exercise.expectedOutput);

  useEffect(() => {
    setCode(exercise.starterCode);
    setInputText(exercise.input);
    setOutput('Run code to see the result here.');
    setShowAnswer(false);
  }, [exerciseIndex, exercise.input, exercise.starterCode]);

  const runCode = async () => {
    if (!(window.Sk && window.Sk.builtinFiles)) {
      setOutput('Python runner is not available right now. You can still read the lesson, compare outputs, and use the model answer.');
      return;
    }

    setRunning(true);
    let result = '';
    const queue = inputText.length ? inputText.split('\n') : [];

    try {
      window.Sk.configure({
        output: (text) => {
          result += text;
        },
        read: builtinRead,
        inputfun: () => Promise.resolve(queue.length ? queue.shift() : ''),
        inputfunTakesPrompt: true,
        __future__: window.Sk.python3,
      });

      await window.Sk.misceval.asyncToPromise(() => window.Sk.importMainWithBody('<stdin>', false, code, true));

      setOutput(result || 'Program finished with no printed output.');
    } catch (err) {
      setOutput(String(err));
    } finally {
      setRunning(false);
    }
  };

  return (
    <Card className="rounded-3xl shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl"><TerminalSquare className="h-6 w-6" /> Practice lab</CardTitle>
        <CardDescription>Type Python, run it in the browser, test it with shown inputs, and compare your result with the expected output.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {labExercises.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setExerciseIndex(index)}
              className={`rounded-2xl border p-4 text-left transition ${exerciseIndex === index ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-200 bg-white hover:bg-slate-50'}`}
            >
              <div className="font-semibold">{item.topic}</div>
              <div className={`mt-1 text-sm ${exerciseIndex === index ? 'text-slate-200' : 'text-slate-500'}`}>{item.description}</div>
            </button>
          ))}
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <div className="mb-2 flex flex-wrap gap-2">
            <Pill>{exercise.topic}</Pill>
            <Pill>{runnerStatus === 'ready' ? 'Runner ready' : runnerStatus === 'error' ? 'Runner unavailable' : 'Loading runner'}</Pill>
          </div>
          <p className="text-sm leading-6 text-slate-700">{exercise.description}</p>
          <p className="mt-3 flex items-start gap-2 text-sm text-slate-700"><Lightbulb className="mt-0.5 h-4 w-4 shrink-0" /> <span>{exercise.hint}</span></p>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            <div>
              <p className="mb-2 text-sm font-semibold text-slate-700">Python code</p>
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                spellCheck={false}
                className="min-h-[360px] w-full rounded-2xl border border-slate-200 bg-slate-950 p-4 font-mono text-sm leading-6 text-slate-100 outline-none"
              />
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold text-slate-700">Shown inputs for this task</p>
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                spellCheck={false}
                className="min-h-[120px] w-full rounded-2xl border border-slate-200 bg-white p-4 font-mono text-sm leading-6 text-slate-900 outline-none"
                placeholder="Put each input on a new line"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <Button onClick={runCode} disabled={running}><Play className="mr-2 h-4 w-4" /> {running ? 'Running...' : 'Run code'}</Button>
              <Button variant="outline" onClick={() => setCode(exercise.starterCode)}>Reset starter code</Button>
              <Button variant="outline" onClick={() => setShowAnswer((prev) => !prev)}>{showAnswer ? 'Hide model answer' : 'Show model answer'}</Button>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <p className="mb-2 text-sm font-semibold text-slate-700">Expected output</p>
              <pre className="min-h-[120px] whitespace-pre-wrap rounded-2xl border border-slate-200 bg-emerald-50 p-4 text-sm text-slate-900">{exercise.expectedOutput}</pre>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold text-slate-700">Your output</p>
              <pre className="min-h-[180px] whitespace-pre-wrap rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-900">{output}</pre>
            </div>
            <div className={`rounded-2xl border border-slate-200 p-4 text-sm ${outputMatches ? 'bg-emerald-50' : 'bg-amber-50'}`}>
              <div className="font-semibold">{outputMatches ? 'Output matches' : 'Check the result'}</div>
              <div className="mt-1 text-slate-700">{outputMatches ? 'Your printed result matches the expected output for this task.' : 'Compare your result line by line with the expected output and check your logic, loop, or print statements.'}</div>
            </div>
            {showAnswer && (
              <div>
                <p className="mb-2 text-sm font-semibold text-slate-700">Model answer</p>
                <CodeBlock code={exercise.answerCode} />
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// ── OOP CLASS BUILDER VISUALISER ─────────────────────────────────────────────
function OopClassBuilder() {
  const [className, setClassName] = React.useState('Tree');
  const [attrs, setAttrs] = React.useState([
    { name: 'species', type: 'String' },
    { name: 'height', type: 'Float' },
    { name: 'age', type: 'Integer' },
  ]);
  const [newAttrName, setNewAttrName] = React.useState('');
  const [newAttrType, setNewAttrType] = React.useState('String');
  const [showGetters, setShowGetters] = React.useState(true);
  const [showExample, setShowExample] = React.useState(false);
  const [exampleArgs, setExampleArgs] = React.useState('');
  const [activeTab, setActiveTab] = React.useState('class');

  const typeDefaults = { String: '"value"', Integer: '0', Float: '0.0', Boolean: 'False' };

  const addAttr = () => {
    const trimmed = newAttrName.trim().replace(/\s+/g, '_');
    if (!trimmed) return;
    setAttrs((prev) => [...prev, { name: trimmed, type: newAttrType }]);
    setNewAttrName('');
  };

  const removeAttr = (index) => setAttrs((prev) => prev.filter((_, i) => i !== index));

  const safeClass = className.trim() || 'MyClass';

  const classCode = [
    'class ' + safeClass + ':',
    '    def __init__(self, ' + attrs.map((a) => a.name).join(', ') + '):',
    ...attrs.map((a) => '        self.__' + a.name + ' = ' + a.name),
    '',
    ...(showGetters
      ? attrs.flatMap((a) => [
          '    def get' + a.name.charAt(0).toUpperCase() + a.name.slice(1) + '(self):',
          '        return self.__' + a.name,
          '',
        ])
      : []),
  ].join('\n');

  const defaultArgs = attrs.map((a) => typeDefaults[a.type] || '"value"').join(', ');
  const usedArgs = exampleArgs.trim() || defaultArgs;
  const varName = safeClass.charAt(0).toLowerCase() + safeClass.slice(1) + '1';

  const exampleCode = [
    '# Create one object',
    varName + ' = ' + safeClass + '(' + usedArgs + ')',
    '',
    ...(showGetters
      ? attrs.map((a) => 'print(' + varName + '.get' + a.name.charAt(0).toUpperCase() + a.name.slice(1) + '())')
      : ['print(' + varName + ')  # needs get methods to see data']),
  ].join('\n');

  const diagramRows = attrs.map((a) => '  - __' + a.name + ' : ' + a.type).join('\n');
  const diagramMethods = [
    '  + __init__(' + attrs.map((a) => a.name + ': ' + a.type).join(', ') + ')',
    ...(showGetters
      ? attrs.map((a) => '  + get' + a.name.charAt(0).toUpperCase() + a.name.slice(1) + '() : ' + a.type)
      : []),
  ].join('\n');
  const classDiagram = '┌─────────────────────────────────────┐\n│           ' + safeClass.padEnd(25) + '│\n├─────────────────────────────────────┤\n' + diagramRows + '\n├─────────────────────────────────────┤\n' + diagramMethods + '\n└─────────────────────────────────────┘';

  const a0 = attrs[0];
  const a0Cap = a0 ? a0.name.charAt(0).toUpperCase() + a0.name.slice(1) : 'Name';
  const commonErrors = [
    { bad: 'self.' + (a0 ? a0.name : 'name') + ' = ...', good: 'self.__' + (a0 ? a0.name : 'name') + ' = ...', msg: 'Missing double underscore makes it public, not private.' },
    { bad: 'def __init__(' + attrs.map((a) => a.name).join(', ') + '):', good: 'def __init__(self, ' + attrs.map((a) => a.name).join(', ') + '):', msg: 'Forgot self as the first parameter.' },
    { bad: 'def get' + a0Cap + '(self):\n    self.__' + (a0 ? a0.name : 'name'), good: 'def get' + a0Cap + '(self):\n    return self.__' + (a0 ? a0.name : 'name'), msg: 'Missing return — the method gives back None instead of the value.' },
  ];

  return (
    <Card className="rounded-2xl shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Code2 className="h-5 w-5" /> OOP class builder
        </CardTitle>
        <CardDescription>
          Build any class interactively. Add attributes and see the Python code, class diagram, and common mistakes update instantly.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="flex flex-wrap items-center gap-3">
          <label className="text-sm font-semibold text-slate-700 w-24">Class name</label>
          <Input value={className} onChange={(e) => setClassName(e.target.value)} placeholder="e.g. Tree" className="w-48" />
          <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
            <input type="checkbox" checked={showGetters} onChange={(e) => setShowGetters(e.target.checked)} className="h-4 w-4" />
            Include get methods
          </label>
        </div>

        <div>
          <p className="mb-2 text-sm font-semibold text-slate-700">Attributes (private — stored as self.__name)</p>
          <div className="space-y-2 mb-3">
            {attrs.map((a, i) => (
              <div key={i} className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                <span className="font-mono text-sm text-slate-800 flex-1">self.__{a.name} : {a.type}</span>
                <button onClick={() => removeAttr(i)} className="text-xs text-slate-400 hover:text-rose-500 px-2">✕</button>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            <Input value={newAttrName} onChange={(e) => setNewAttrName(e.target.value)} placeholder="attribute name" className="w-40"
              onKeyDown={(e) => { if (e.key === 'Enter') addAttr(); }} />
            <select value={newAttrType} onChange={(e) => setNewAttrType(e.target.value)}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700">
              {['String', 'Integer', 'Float', 'Boolean'].map((t) => <option key={t}>{t}</option>)}
            </select>
            <Button onClick={addAttr} variant="outline">+ Add</Button>
          </div>
        </div>

        <div className="flex gap-2 border-b border-slate-200">
          {['class', 'diagram', 'errors'].map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className={"rounded-t-xl px-4 py-2 text-sm font-medium transition " + (activeTab === tab ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100')}>
              {tab === 'class' ? 'Python code' : tab === 'diagram' ? 'Class diagram' : 'Common mistakes'}
            </button>
          ))}
        </div>

        {activeTab === 'class' && (
          <div className="space-y-3">
            <CodeBlock code={classCode} />
            <div>
              <div className="flex items-center gap-3 mb-2">
                <p className="text-sm font-semibold text-slate-700">Example usage</p>
                <button onClick={() => setShowExample((v) => !v)} className="text-xs text-slate-500 underline">{showExample ? 'hide' : 'show'}</button>
              </div>
              {showExample && (
                <div className="space-y-2">
                  <Input value={exampleArgs} onChange={(e) => setExampleArgs(e.target.value)}
                    placeholder={'Custom args, e.g. ' + defaultArgs} className="font-mono text-sm" />
                  <CodeBlock code={exampleCode} />
                  <p className="text-xs text-slate-500">Leave blank to use default placeholder values.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'diagram' && (
          <div>
            <p className="mb-3 text-sm text-slate-600">This is how the class looks in a UML class diagram — the format used in exam questions.</p>
            <pre className="overflow-x-auto rounded-2xl border border-slate-200 bg-slate-950 p-4 text-sm leading-6 text-slate-100 font-mono">{classDiagram}</pre>
            <div className="mt-3 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-slate-700">
              <span className="font-semibold">Exam tip:</span> When you see a class diagram like this, your job is to write the Python code. Attributes with - are private (double underscore). Methods with + are public.
            </div>
          </div>
        )}

        {activeTab === 'errors' && (
          <div className="space-y-3">
            <p className="text-sm text-slate-600">These are the most common OOP mistakes. Compare wrong vs correct versions.</p>
            {commonErrors.map((e, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className="bg-rose-50 p-3">
                    <p className="text-xs font-semibold text-rose-700 mb-1">✗ Wrong</p>
                    <pre className="text-sm font-mono text-rose-900 whitespace-pre-wrap">{e.bad}</pre>
                  </div>
                  <div className="bg-emerald-50 p-3">
                    <p className="text-xs font-semibold text-emerald-700 mb-1">✓ Correct</p>
                    <pre className="text-sm font-mono text-emerald-900 whitespace-pre-wrap">{e.good}</pre>
                  </div>
                </div>
                <div className="bg-slate-50 px-3 py-2 text-sm text-slate-700">{e.msg}</div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function OopFilterPlayground() {
  const trees = [
    { species: 'Oak',    height: 12.5, age: 80  },
    { species: 'Pine',   height: 8.0,  age: 30  },
    { species: 'Birch',  height: 5.5,  age: 15  },
    { species: 'Willow', height: 9.2,  age: 45  },
    { species: 'Yew',    height: 3.1,  age: 200 },
    { species: 'Ash',    height: 11.0, age: 60  },
    { species: 'Cedar',  height: 6.8,  age: 25  },
  ];

  const [filterType, setFilterType] = React.useState('age');
  const [operator, setOperator] = React.useState('>');
  const [threshold, setThreshold] = React.useState('50');
  const [showCode, setShowCode] = React.useState(false);

  const num = Number(threshold);
  const filtered = trees.filter((t) => {
    const val = filterType === 'age' ? t.age : t.height;
    if (operator === '>') return val > num;
    if (operator === '<') return val < num;
    if (operator === '>=') return val >= num;
    if (operator === '<=') return val <= num;
    if (operator === '==') return val === num;
    return false;
  });

  const getter = filterType === 'age' ? 'getAge()' : 'getHeight()';
  const code = 'for tree in trees:\n    if tree.' + getter + ' ' + operator + ' ' + threshold + ':\n        print(tree.getSpecies())';
  const output = filtered.map((t) => t.species).join('\n') || '(no matches)';

  return (
    <Card className="rounded-2xl shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Search className="h-5 w-5" /> OOP filtering playground
        </CardTitle>
        <CardDescription>Set a filter condition and see which Tree objects match. The generated Python code updates live.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <span className="text-sm font-semibold text-slate-700">Show trees where</span>
          <select value={filterType} onChange={(e) => setFilterType(e.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm">
            <option value="age">age</option>
            <option value="height">height</option>
          </select>
          <select value={operator} onChange={(e) => setOperator(e.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm">
            {['>', '<', '>=', '<=', '=='].map((op) => <option key={op}>{op}</option>)}
          </select>
          <Input value={threshold} onChange={(e) => setThreshold(e.target.value)} className="w-24 text-sm" />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-semibold text-slate-700">All trees</p>
            <div className="space-y-1">
              {trees.map((t) => {
                const passes = filtered.includes(t);
                const val = filterType === 'age' ? t.age : t.height;
                return (
                  <div key={t.species} className={"rounded-xl border px-3 py-2 text-sm " + (passes ? 'border-emerald-300 bg-emerald-50' : 'border-slate-200 bg-white text-slate-500')}>
                    {t.species} — {filterType}: {val} {passes ? '✓' : '✗'}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <p className="mb-2 text-sm font-semibold text-slate-700">Output ({filtered.length} match{filtered.length !== 1 ? 'es' : ''})</p>
              <pre className="min-h-[120px] rounded-2xl border border-slate-200 bg-emerald-50 p-3 text-sm">{output}</pre>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-semibold text-slate-700">Generated Python</p>
                <button onClick={() => setShowCode((v) => !v)} className="text-xs text-slate-500 underline">{showCode ? 'hide' : 'show'}</button>
              </div>
              {showCode && <CodeBlock code={code} />}
            </div>
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-slate-700">
              <span className="font-semibold">Key exam pattern:</span> for loop → if with getter → print/count/append. This is what P4 always tests.
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function PythonProgrammingTutorApp() {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showSolution, setShowSolution] = useState({});

  const lesson = lessons[currentLesson];
  const totalQuestions = lessons.reduce((sum, item) => sum + item.quiz.length, 0);
  const correctAnswers = lessons.reduce((sum, item) => sum + item.quiz.reduce((inner, q, index) => inner + (answers[`${item.id}-${index}`] === q.answer ? 1 : 0), 0), 0);
  const completedLessons = lessons.filter((item) => item.quiz.every((q, index) => answers[`${item.id}-${index}`] !== undefined)).length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <div className="mx-auto max-w-7xl p-4 md:p-6">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-6 grid gap-4 lg:grid-cols-[300px_1fr]">
          <Card className="rounded-3xl border-0 bg-slate-900 text-white shadow-xl">
            <CardHeader>
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10"><Code2 className="h-6 w-6" /></div>
              <CardTitle className="text-2xl text-white">Python Programming Tutor</CardTitle>
              <CardDescription className="text-slate-300">Lists, algorithms, recursion, OOP (classes, constructors, get methods, filtering objects) — with quizzes and in-browser Python practice.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                <div className="rounded-2xl bg-white/10 p-4">
                  <div className="text-sm text-slate-300">Lessons attempted</div>
                  <div className="mt-1 text-2xl font-bold">{completedLessons}/{lessons.length}</div>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <div className="text-sm text-slate-300">Quiz score</div>
                  <div className="mt-1 text-2xl font-bold">{correctAnswers}/{totalQuestions}</div>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <div className="text-sm text-slate-300">Current focus</div>
                  <div className="mt-1 text-base font-semibold">{lesson.title}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl shadow-sm">
            <CardHeader>
              <CardTitle>Learning map</CardTitle>
              <CardDescription>Move through the topics in sequence or jump to the one you want to revise.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {lessons.map((item, index) => {
                const answered = item.quiz.every((q, qIndex) => answers[`${item.id}-${qIndex}`] !== undefined);
                const isActive = index === currentLesson;

                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentLesson(index)}
                    className={`rounded-2xl border p-4 text-left transition ${isActive ? 'border-slate-900 bg-slate-900 text-white shadow-lg' : 'border-slate-200 bg-white hover:bg-slate-50'}`}
                  >
                    <div className="mb-2 flex items-start justify-between gap-3">
                      <div className="text-sm font-semibold">{index + 1}. {item.title}</div>
                      {answered ? <CheckCircle2 className="h-5 w-5 shrink-0" /> : <Circle className="h-5 w-5 shrink-0" />}
                    </div>
                    <div className={`text-sm ${isActive ? 'text-slate-200' : 'text-slate-500'}`}>{item.goal}</div>
                  </button>
                );
              })}
            </CardContent>
          </Card>
        </motion.div>

        <div className="space-y-6">
          <PracticeLab />

          <div className="grid gap-6 xl:grid-cols-[1fr_320px]">
            <div className="space-y-6">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} key={lesson.id} className="space-y-6">
                <Card className="rounded-3xl shadow-sm">
                  <CardHeader>
                    <div className="mb-3 flex flex-wrap gap-2">
                      <Pill>Python</Pill>
                      <Pill>Worked examples</Pill>
                      <Pill>Quiz included</Pill>
                    </div>
                    <CardTitle className="text-2xl">{lesson.title}</CardTitle>
                    <CardDescription className="text-base">{lesson.goal}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="mb-2 text-lg font-semibold">What this means</h3>
                      <p className="leading-7 text-slate-700">{lesson.why}</p>
                    </div>
                    <div>
                      <h3 className="mb-3 text-lg font-semibold">Key ideas</h3>
                      <div className="grid gap-3 md:grid-cols-2">
                        {lesson.ideas.map((idea) => (
                          <div key={idea} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">{idea}</div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-3 text-lg font-semibold">Python example</h3>
                      <CodeBlock code={lesson.code} />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Shown inputs and outputs</h3>
                      {lesson.io.map((item) => <ExampleIO key={item.title} {...item} />)}
                    </div>
                    {lesson.beginnerTip && (
                      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4">
                        <p className="mb-1 text-sm font-semibold text-blue-800">Beginner tip</p>
                        <p className="text-sm leading-6 text-blue-900">{lesson.beginnerTip}</p>
                      </div>
                    )}
                    {lesson.examTip && (
                      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
                        <p className="mb-1 text-sm font-semibold text-amber-800">Exam tip</p>
                        <p className="text-sm leading-6 text-amber-900">{lesson.examTip}</p>
                      </div>
                    )}
                    {lesson.commonMistakes && (
                      <div>
                        <h3 className="mb-3 text-lg font-semibold">Common mistakes to avoid</h3>
                        <div className="grid gap-2 md:grid-cols-2">
                          {lesson.commonMistakes.map((item) => (
                            <div key={item} className="rounded-2xl border border-rose-200 bg-rose-50 p-3 text-sm text-rose-900">✗ {item}</div>
                          ))}
                        </div>
                      </div>
                    )}
                    {lesson.recommendations && (
                      <div>
                        <h3 className="mb-3 text-lg font-semibold">Examiner recommendations</h3>
                        <div className="grid gap-3">
                          {lesson.recommendations.map((item) => (
                            <div key={item} className="rounded-2xl border border-slate-200 bg-amber-50 p-4 text-sm text-slate-800">{item}</div>
                          ))}
                        </div>
                      </div>
                    )}
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold">Mini challenge</h3>
                      <CodeBlock code={lesson.challenge} />
                      <Button variant="outline" onClick={() => setShowSolution((prev) => ({ ...prev, [lesson.id]: !prev[lesson.id] }))}>{showSolution[lesson.id] ? 'Hide solution' : 'Show solution'}</Button>
                      {showSolution[lesson.id] && <CodeBlock code={lesson.solution} />}
                    </div>
                  </CardContent>
                </Card>

                {lesson.id === 'validation' && <ValidationSimulator />}
                {lesson.id === 'bubble' && <BubbleSortDemo />}
                {lesson.id === 'binary' && <BinarySearchDemo />}
                {['recursion', 'recursion-features', 'recursion-code', 'recursion-tracing'].includes(lesson.id) && <RecursionTraceDemo />}
                {lesson.id === 'recursion-useful' && <RecursionUseCases />}
                {lesson.id === 'recursion-stack' && <RecursionStackDemo />}
                {lesson.id === 'testing' && <TestBench />}
                {['oop-class','oop-getters','oop-methods'].includes(lesson.id) && <OopClassBuilder />}
                {['oop-objects-list','oop-filter','oop-exam'].includes(lesson.id) && <OopFilterPlayground />}

                <QuizBlock lessonId={lesson.id} questions={lesson.quiz} answers={answers} setAnswers={setAnswers} />

                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" onClick={() => setCurrentLesson((n) => Math.max(0, n - 1))} disabled={currentLesson === 0}>Previous topic</Button>
                  <Button onClick={() => setCurrentLesson((n) => Math.min(lessons.length - 1, n + 1))} disabled={currentLesson === lessons.length - 1}>Next topic <ChevronRight className="ml-1 h-4 w-4" /></Button>
                </div>
              </motion.div>
            </div>

            <div className="space-y-6">
              <Card className="rounded-3xl shadow-sm">
                <CardHeader>
                  <CardTitle>Revision checklist</CardTitle>
                  <CardDescription>Use this to confirm what the learner should now be able to do.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-slate-700">
                  <div className="rounded-2xl border border-slate-200 p-4">Declare a list and fill it using input and append().</div>
                  <div className="rounded-2xl border border-slate-200 p-4">Write a validation loop for allowed ranges or words.</div>
                  <div className="rounded-2xl border border-slate-200 p-4">Trace and code bubble sort in ascending order.</div>
                  <div className="rounded-2xl border border-slate-200 p-4">Explain why binary search needs sorted data.</div>
                  <div className="rounded-2xl border border-slate-200 p-4">Print list contents clearly for a user.</div>
                  <div className="rounded-2xl border border-slate-200 p-4">Create simple tests with shown input and expected output.</div>
                  <div className="rounded-2xl border border-slate-200 p-4">Identify the base case and recursive case in a recursive function.</div>
                  <div className="rounded-2xl border border-slate-200 p-4">Trace recursive calls down to the base case and back up during unwinding.</div>
                  <div className="rounded-2xl border border-slate-200 p-4">Explain stack use and when recursion is a sensible choice.</div>
                  <div className="rounded-2xl border border-slate-200 p-4">Write a class with private attributes and a constructor (__init__).</div>
                  <div className="rounded-2xl border border-slate-200 p-4">Write get methods for each private attribute.</div>
                  <div className="rounded-2xl border border-slate-200 p-4">Create objects and store them in a list using append().</div>
                  <div className="rounded-2xl border border-slate-200 p-4">Filter a list of objects using a loop and get methods in the condition.</div>
                </CardContent>
              </Card>

              <Card className="rounded-3xl shadow-sm">
                <CardHeader>
                  <CardTitle>Teacher notes / learner tips</CardTitle>
                  <CardDescription>Useful reminders while practising Python.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm leading-6 text-slate-700">
                  <p>Use meaningful variable names such as <span className="font-mono">numbers</span>, <span className="font-mono">target</span>, and <span className="font-mono">mark</span>.</p>
                  <p>For binary search, sort the list first. For bubble sort, trace each swap carefully.</p>
                  <p>When testing, include a normal case, a boundary case, and at least one unusual case.</p>
                  <p>For recursion, always identify the base case, the recursive case, and how the argument changes each call.</p>
                  <p>For OOP: always make attributes private with <span className="font-mono">self.__name</span>. Every method needs <span className="font-mono">self</span>. Every get method needs <span className="font-mono">return</span>.</p>
                  <p>In the exam, follow this order: write the class → add getters → build the list → write the filter loop.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
