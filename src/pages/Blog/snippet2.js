export const snippet2 = {
  title: "File Handling",
  description:
    "Introducing ourselve to basic file handling operations. Read,write, size and permissions",
  codesnippets: [
    {
      id: 1,
      code: `#include <stdio.h>
  #include <unistd.h>
  #include <fcntl.h>
  #include <stdlib.h>`,
      description:
        "Include necessary libraries: stdio for standard I/O, unistd for system calls, fcntl for file control options, and stdlib for memory management.",
      language: "c",
    },
    {
      id: 2,
      code: `int main(int argc, char **argv)`,
      description:
        "Define the main function, accepting command-line arguments, though they aren’t used in this program.",
      language: "c",
    },
    {
      id: 3,
      code: `int fr = open("img.png", O_RDONLY);
  if (fr == -1)
  {
      perror("Error -- couldn't attach file descriptor.");
      return 1;
  }`,
      description:
        "Attempt to open 'img.png' in read-only mode. If unsuccessful, print an error message and exit with a failure code.",
      language: "c",
    },
    {
      id: 4,
      code: `int fw = open("copy.png", O_CREAT | O_WRONLY | O_APPEND, 0644);
  if (fw == -1)
  {
      perror("Error -- couldn't attach file descriptor.");
      return 1;
  }`,
      description:
        "Open 'copy.png' for writing, creating it if necessary. Append mode (`O_APPEND`) is enabled, and permissions are set to `0644` (owner can read/write, others can read).",
      language: "c",
    },
    {
      id: 5,
      code: `size_t fileSize = lseek(fr, 0, SEEK_END);
  lseek(fr, 0, SEEK_SET);`,
      description:
        "Move the file descriptor to the end of the file to determine its size, then reset it back to the start.",
      language: "c",
    },
    {
      id: 6,
      code: `void *buffer = malloc(fileSize);`,
      description:
        "Dynamically allocate a buffer to hold the file's contents based on its determined size.",
      language: "c",
    },
    {
      id: 7,
      code: `size_t bytesRead = read(fr, buffer, fileSize);
  size_t bytesWritten = write(fw, buffer, fileSize);`,
      description:
        "Read the file into the buffer and write its contents into the new file.",
      language: "c",
    },
    {
      id: 8,
      code: `printf("BytesRead:%lu bytes\\nFileSize:%lu bytes\\n", bytesRead, fileSize);`,
      description:
        "Print the number of bytes read and the total file size for verification.",
      language: "c",
    },
    {
      id: 9,
      code: `free(buffer);`,
      description: "Free the allocated memory to prevent memory leaks.",
      language: "c",
    },
    {
      id: 10,
      code: `close(fr)\nclose(fw);`,
      description: "Close both file descriptors to release system resources.",
      language: "c",
    },
  ],
};
