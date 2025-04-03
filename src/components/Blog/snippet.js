export const snippet = [
  {
    id: 1,
    code: `#include <stdio.h>`,
    description:
      "Include the standard I/O library, which provides functions like printf for output.",
    language: "c",
  },
  {
    id: 2,
    code: `#include <stdio.h>
  
  int main(void)
  {
      printf("Hello, World!");
  }`,
    description:
      "Define the main function, which serves as the program's entry point. Inside, we use printf to print a message to the console.",
    language: "c",
  },
  {
    id: 3,
    code: `#include <stdio.h>
  
  int main(void)
  {
      printf("Hello, World!");
      return 0;
  }`,
    description:
      "Explicitly return 0 to indicate successful execution. This is a convention in C to signal that the program ran without errors.",
    language: "c",
  },
  {
    id: 4,
    code: `gcc helloworld.c`,
    description:
      "Compile the program using GCC (GNU Compiler Collection), which converts the source code into an executable file.",
    language: "shell",
  },
  {
    id: 5,
    code: `./a.out
  Hello, World!`,
    description:
      "Run the compiled executable (`a.out` by default) and observe the output printed to the console.",
    language: "shell",
  },
  {
    id: 6,
    code: `echo $? 
  0`,
    description:
      "Check the exit status of the last command. A value of `0` indicates successful execution.",
    language: "shell",
  },
];
