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
              <CardDescription className="text-slate-300">Learn lists, standard algorithms, recursion, visible input/output, quizzes, and browser-based Python practice in one place.</CardDescription>
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
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
