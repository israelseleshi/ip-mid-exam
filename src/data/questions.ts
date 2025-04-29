import { Question, QuestionType, Chapter } from '../types';

// Chapter 1 Questions
const chapter1Questions: Question[] = [
  {
    id: 1,
    type: QuestionType.MultipleChoice,
    text: "What is the main purpose of an HTML form?",
    options: [
      "Configure an HTTP request to send data",
      "Style a webpage",
      "Store data locally",
      "Execute client-side scripts"
    ],
    correctAnswer: "Configure an HTTP request to send data",
    chapter: 1
  },
  {
    id: 2,
    type: QuestionType.MultipleChoice,
    text: "Which attribute specifies the destination of form data?",
    options: [
      "type",
      "method",
      "action",
      "name"
    ],
    correctAnswer: "action",
    chapter: 1
  },
  {
    id: 3,
    type: QuestionType.MultipleChoice,
    text: "If the action attribute is missing in a form, what happens?",
    options: [
      "Form submission fails",
      "Data is sent to the current page",
      "Data is not sent",
      "Data is sent to the server root"
    ],
    correctAnswer: "Data is sent to the current page",
    chapter: 1
  },
  {
    id: 4,
    type: QuestionType.MultipleChoice,
    text: "Which HTTP methods do HTML forms support?",
    options: [
      "GET, POST, PUT, DELETE",
      "POST and DELETE",
      "GET, POST, PATCH",
      "GET and POST"
    ],
    correctAnswer: "GET and POST",
    chapter: 1
  },
  {
    id: 5,
    type: QuestionType.MultipleChoice,
    text: "What does the method attribute control?",
    options: [
      "The format of the data",
      "How the data is sent",
      "Where the data is sent",
      "The validation rules"
    ],
    correctAnswer: "How the data is sent",
    chapter: 1
  },
  {
    id: 6,
    type: QuestionType.MultipleChoice,
    text: "Which PHP superglobal collects POST method data?",
    options: [
      "$_GET",
      "$_REQUEST",
      "$_SERVER",
      "$_POST"
    ],
    correctAnswer: "$_POST",
    chapter: 1
  },
  {
    id: 7,
    type: QuestionType.MultipleChoice,
    text: "Which superglobal handles data from URL parameters?",
    options: [
      "$_POST",
      "$_COOKIE",
      "$_GET",
      "$_SESSION"
    ],
    correctAnswer: "$_GET",
    chapter: 1
  },
  {
    id: 8,
    type: QuestionType.MultipleChoice,
    text: "How can variables be sent via HTTP POST?",
    options: [
      "Cookies and query strings",
      "JavaScript and cookies",
      "HTML forms and JavaScript HTTP requests",
      "Query strings and HTML forms"
    ],
    correctAnswer: "HTML forms and JavaScript HTTP requests",
    chapter: 1
  },
  {
    id: 9,
    type: QuestionType.MultipleChoice,
    text: "What does $_SERVER[\"REQUEST_METHOD\"] return for a POST form submission?",
    options: [
      "SUBMIT",
      "REQUEST",
      "POST",
      "GET"
    ],
    correctAnswer: "POST",
    chapter: 1
  },
  {
    id: 10,
    type: QuestionType.MultipleChoice,
    text: "How is POST form data accessed in PHP?",
    options: [
      "$_FORM[\"field_name\"]",
      "$_REQUEST[\"field_name\"]",
      "$_POST[\"field_name\"]",
      "$_GET[\"field_name\"]"
    ],
    correctAnswer: "$_POST[\"field_name\"]",
    chapter: 1
  },
  {
    id: 11,
    type: QuestionType.MultipleChoice,
    text: "What does the `empty()` function check in PHP?",
    options: [
      "If a variable is numeric",
      "If a variable exists",
      "If a variable is a string",
      "If a variable is empty or not"
    ],
    correctAnswer: "If a variable is empty or not",
    chapter: 1
  },
  {
    id: 12,
    type: QuestionType.MultipleChoice,
    text: "Which function performs string pattern matching in PHP?",
    options: [
      "str_replace()",
      "preg_match()",
      "strlen()",
      "count()"
    ],
    correctAnswer: "preg_match()",
    chapter: 1
  },
  {
    id: 13,
    type: QuestionType.MultipleChoice,
    text: "What does `preg_match()` return?",
    options: [
      "The number of matches",
      "A new string with replacements",
      "1 if the pattern is found, 0 if not",
      "The matched string"
    ],
    correctAnswer: "1 if the pattern is found, 0 if not",
    chapter: 1
  },
  {
    id: 14,
    type: QuestionType.MultipleChoice,
    text: "Which regular expression modifier makes searches case-insensitive?",
    options: [
      "s",
      "u",
      "m",
      "i"
    ],
    correctAnswer: "i",
    chapter: 1
  },
  {
    id: 15,
    type: QuestionType.MultipleChoice,
    text: "What does the regex pattern `[a-z]` match?",
    options: [
      "Any whitespace",
      "Any digit",
      "Any lowercase letter",
      "Any uppercase letter"
    ],
    correctAnswer: "Any lowercase letter",
    chapter: 1
  },
  {
    id: 16,
    type: QuestionType.MultipleChoice,
    text: "Which regex metacharacter matches any single character?",
    options: [
      "?",
      "+",
      "*",
      "."
    ],
    correctAnswer: ".",
    chapter: 1
  },
  {
    id: 17,
    type: QuestionType.MultipleChoice,
    text: "What does the regex quantifier `n+` match?",
    options: [
      "Zero or one occurrence of n",
      "Exactly one occurrence of n",
      "At least one occurrence of n",
      "Zero or more occurrences of n"
    ],
    correctAnswer: "At least one occurrence of n",
    chapter: 1
  },
  {
    id: 18,
    type: QuestionType.MultipleChoice,
    text: "How can hidden data be included in a PHP form?",
    options: [
      "<input type=\"password\">",
      "<input type=\"submit\">",
      "<input type=\"text\">",
      "<input type=\"hidden\">"
    ],
    correctAnswer: "<input type=\"hidden\">",
    chapter: 1
  },
  {
    id: 19,
    type: QuestionType.MultipleChoice,
    text: "Which regex pattern validates a 10-digit phone number?",
    options: [
      "/^[0-9]{10}$/",
      "/^[a-z]{10}$/",
      "/^[0-9]*$/",
      "/^[0-9]+$/"
    ],
    correctAnswer: "/^[0-9]{10}$/",
    chapter: 1
  },
  {
    id: 20,
    type: QuestionType.MultipleChoice,
    text: "Which regex pattern checks for a valid email format?",
    options: [
      "/^[a-z0-9-]+(\\.[a-z0-9-]+)*$/",
      "/^[a-z0-9-]+(\\.[a-z0-9-]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,3})$/",
      "/^[a-zA-Z0-9_]*$/",
      "/^[a-z0-9]+$/"
    ],
    correctAnswer: "/^[a-z0-9-]+(\\.[a-z0-9-]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,3})$/",
    chapter: 1
  },
  {
    id: 21,
    type: QuestionType.WriteOutput,
    text: "What is the output of the following PHP code?\n```php\nif ($_SERVER[\"REQUEST_METHOD\"] == \"POST\") {\n    $name = $_POST[\"username\"];\n    echo \"Welcome, \" . $name . \"!\";\n}\n```\n(Assume the form submits `username=Alice` via POST.)",
    correctAnswer: "Welcome, Alice!",
    chapter: 1
  },
  {
    id: 22,
    type: QuestionType.WriteOutput,
    text: "What is the output of the following PHP code?\n```php\n$email = \"user@domain.com\";\nif (preg_match(\"/^[a-z0-9-]+(\\.[a-z0-9-]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,3})$/\", $email)) {\n    echo \"Valid email\";\n} else {\n    echo \"Invalid email\";\n}\n```",
    correctAnswer: "Valid email",
    chapter: 1
  },
  {
    id: 23,
    type: QuestionType.WriteOutput,
    text: "What is the output of the following PHP code?\n```php\n$str = \"Hello PHP\";\n$pattern = \"/php/i\";\necho preg_match($pattern, $str);\n```",
    correctAnswer: "1",
    chapter: 1
  },
  {
    id: 24,
    type: QuestionType.WriteOutput,
    text: "What is the output of the following PHP code?\n```php\n$phone = \"1234567890\";\nif (preg_match(\"/^[0-9]{10}$/\", $phone)) {\n    echo \"Valid phone\";\n} else {\n    echo \"Invalid phone\";\n}\n```",
    correctAnswer: "Valid phone",
    chapter: 1
  },
  {
    id: 25,
    type: QuestionType.WriteOutput,
    text: "What is the output of the following PHP code?\n```php\n$str = \"Visit GitHub\";\n$pattern = \"/GitHub/i\";\necho preg_replace($pattern, \"Twitter\", $str);\n```",
    correctAnswer: "Visit Twitter",
    chapter: 1
  },
  {
    id: 26,
    type: QuestionType.Coding,
    text: "Write a PHP script for a form that accepts a name and displays \"Welcome, [Name]!\" after submission.",
    correctAnswer: `<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    echo "Welcome, " . $name . "!";
}
?>
<html>
<body>
<form action="" method="post">
    Name: <input type="text" name="name">
    <input type="submit" value="Submit">
</form>
</body>
</html>`,
    chapter: 1
  },
  {
    id: 27,
    type: QuestionType.Coding,
    text: "Write a PHP script for a form with a dropdown of three programming languages (PHP, Python, JavaScript). Display the selected language after submission.",
    correctAnswer: `<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $language = $_POST["language"];
    echo "You selected: " . $language;
}
?>
<html>
<body>
<form action="" method="post">
    <label for="language">Choose a language:</label>
    <select name="language" id="language">
        <option value="PHP">PHP</option>
        <option value="Python">Python</option>
        <option value="JavaScript">JavaScript</option>
    </select>
    <input type="submit" value="Submit">
</form>
</body>
</html>`,
    chapter: 1
  },
  {
    id: 28,
    type: QuestionType.Coding,
    text: "Write a PHP script to validate a username using regex to allow only letters, numbers, and underscores, and display if valid or invalid.",
    correctAnswer: `<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    if (preg_match("/^[a-zA-Z0-9_]*$/", $username)) {
        echo "Valid username";
    } else {
        echo "Invalid username: Only letters, numbers, and underscores allowed";
    }
}
?>
<html>
<body>
<form action="" method="post">
    Username: <input type="text" name="username">
    <input type="submit" value="Submit">
</form>
</body>
</html>`,
    chapter: 1
  },
  {
    id: 29,
    type: QuestionType.Coding,
    text: "Write a PHP script for a form with a phone number field. Use regex to validate a 10-digit number and display if valid or invalid.",
    correctAnswer: `<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $phone = $_POST["phone"];
    if (preg_match("/^[0-9]{10}$/", $phone)) {
        echo "Valid phone number";
    } else {
        echo "Invalid phone number: Must be 10 digits";
    }
}
?>
<html>
<body>
<form action="" method="post">
    Phone Number: <input type="text" name="phone">
    <input type="submit" value="Submit">
</form>
</body>
</html>`,
    chapter: 1
  },
  {
    id: 30,
    type: QuestionType.Coding,
    text: "Write a PHP script for a contact form (in a single `contact.php` file) that accepts name, email, and message. Validate name, email (using regex), and message are filled, and display a success message or error.",
    correctAnswer: `<?php
$errors = [];
$success = "";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    if (empty($name)) {
        $errors[] = "Name is required";
    }
    if (empty($email)) {
        $errors[] = "Email is required";
    } elseif (!preg_match("/^[a-z0-9-]+(\\.[a-z0-9-]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,3})$/", $email)) {
        $errors[] = "Invalid email format";
    }
    if (empty($message)) {
        $errors[] = "Message is required";
    }
    
    if (empty($errors)) {
        $success = "Thank you, $name! Your message has been received.";
    }
}
?>
<html>
<body>
<?php if ($success) { ?>
    <p><?php echo $success; ?></p>
<?php } ?>
<?php if (!empty($errors)) { ?>
    <p>Please fill all required fields correctly.</p>
    <ul>
    <?php foreach ($errors as $error) { ?>
        <li><?php echo $error; ?></li>
    <?php } ?>
    </ul>
<?php } ?>
<form action="contact.php" method="post">
    Name *:<br>
    <input type="text" name="name" value="<?php echo isset($name) ? $name : ''; ?>"><br>
    Email *:<br>
    <input type="email" name="email" value="<?php echo isset($email) ? $email : ''; ?>"><br>
    Message *:<br>
    <textarea name="message"><?php echo isset($message) ? $message : ''; ?></textarea><br>
    <input type="submit" value="Send Message">
</form>
</body>
</html>`,
    chapter: 1
  },
];

// Chapter 2 Questions
const chapter2Questions: Question[] = [
  {
    id: 31,
    type: QuestionType.MultipleChoice,
    text: "What is the primary function of server-side scripting?",
    options: [
      "Enhance webpage appearance",
      "Execute scripts on the client's browser",
      "Generate dynamic web content",
      "Manage client-side storage"
    ],
    correctAnswer: "Generate dynamic web content",
    chapter: 2
  },
  {
    id: 32,
    type: QuestionType.MultipleChoice,
    text: "Which protocol is used for communication between a client and a server on the web?",
    options: [
      "FTP",
      "HTTP",
      "SMTP",
      "TCP"
    ],
    correctAnswer: "HTTP",
    chapter: 2
  },
  {
    id: 33,
    type: QuestionType.MultipleChoice,
    text: "Which of the following is a server-side scripting language?",
    options: [
      "JavaScript (client-side only)",
      "PHP",
      "CSS",
      "HTML"
    ],
    correctAnswer: "PHP",
    chapter: 2
  },
  {
    id: 34,
    type: QuestionType.MultipleChoice,
    text: "What does the Apache HTTP Server primarily do?",
    options: [
      "Render client-side scripts",
      "Accept and process HTTP requests",
      "Store database records",
      "Manage browser cookies"
    ],
    correctAnswer: "Accept and process HTTP requests",
    chapter: 2
  },
  {
    id: 35,
    type: QuestionType.MultipleChoice,
    text: "What is the purpose of XAMPP?",
    options: [
      "Host live websites",
      "Provide a local development environment",
      "Secure public servers",
      "Optimize client-side scripts"
    ],
    correctAnswer: "Provide a local development environment",
    chapter: 2
  },
  {
    id: 36,
    type: QuestionType.MultipleChoice,
    text: "Which of the following is NOT a component of LAMP?",
    options: [
      "Linux",
      "Apache",
      "MySQL",
      "Perl"
    ],
    correctAnswer: "Perl",
    chapter: 2
  },
  {
    id: 37,
    type: QuestionType.MultipleChoice,
    text: "How is a PHP variable declared?",
    options: [
      "var $name",
      "$name",
      "let $name",
      "const $name"
    ],
    correctAnswer: "$name",
    chapter: 2
  },
  {
    id: 38,
    type: QuestionType.MultipleChoice,
    text: "Which PHP tag is used to embed code in an HTML file?",
    options: [
      "<script>",
      "<?php ?>",
      "<% %>",
      "<? ?>"
    ],
    correctAnswer: "<?php ?>",
    chapter: 2
  },
  {
    id: 39,
    type: QuestionType.MultipleChoice,
    text: "What is the correct syntax for a single-line comment in PHP?",
    options: [
      "/* comment */",
      "// comment",
      "<!-- comment -->",
      "#* comment *#"
    ],
    correctAnswer: "// comment",
    chapter: 2
  },
  {
    id: 40,
    type: QuestionType.MultipleChoice,
    text: "Are PHP function names case-sensitive?",
    options: [
      "Yes",
      "No",
      "Only in PHP 7",
      "Depends on the server"
    ],
    correctAnswer: "No",
    chapter: 2
  },
  {
    id: 41,
    type: QuestionType.MultipleChoice,
    text: "Which data type in PHP represents a variable with no value?",
    options: [
      "Boolean",
      "NULL",
      "Integer",
      "Resource"
    ],
    correctAnswer: "NULL",
    chapter: 2
  },
  {
    id: 42,
    type: QuestionType.MultipleChoice,
    text: "What is the scope of a variable declared inside a PHP function?",
    options: [
      "Global",
      "Local",
      "Static",
      "Public"
    ],
    correctAnswer: "Local",
    chapter: 2
  },
  {
    id: 43,
    type: QuestionType.MultipleChoice,
    text: "How can a global variable be accessed inside a PHP function?",
    options: [
      "Using the `global` keyword",
      "Using the `static` keyword",
      "Using the `const` keyword",
      "It is automatically accessible"
    ],
    correctAnswer: "Using the `global` keyword",
    chapter: 2
  },
  {
    id: 44,
    type: QuestionType.MultipleChoice,
    text: "What does the PHP `echo` statement do?",
    options: [
      "Returns a value",
      "Outputs one or more strings",
      "Declares a variable",
      "Defines a function"
    ],
    correctAnswer: "Outputs one or more strings",
    chapter: 2
  },
  {
    id: 45,
    type: QuestionType.MultipleChoice,
    text: "Which PHP control structure is used to execute a block of code a specific number of times?",
    options: [
      "while",
      "do…while",
      "for",
      "switch"
    ],
    correctAnswer: "for",
    chapter: 2
  },
  {
    id: 46,
    type: QuestionType.MultipleChoice,
    text: "What is the key difference between `array_push()` and `array_unshift()`?",
    options: [
      "`array_push()` adds to the end, `array_unshift()` adds to the beginning",
      "`array_push()` removes elements, `array_unshift()` adds elements",
      "`array_push()` sorts the array, `array_unshift()` merges arrays",
      "`array_push()` adds to the beginning, `array_unshift()` adds to the end"
    ],
    correctAnswer: "`array_push()` adds to the end, `array_unshift()` adds to the beginning",
    chapter: 2
  },
  {
    id: 47,
    type: QuestionType.MultipleChoice,
    text: "What does the `array_keys()` function return?",
    options: [
      "All values in the array",
      "All keys in the array",
      "The size of the array",
      "The first element of the array"
    ],
    correctAnswer: "All keys in the array",
    chapter: 2
  },
  {
    id: 48,
    type: QuestionType.MultipleChoice,
    text: "What does the `array_merge()` function do?",
    options: [
      "Splits an array into parts",
      "Combines two or more arrays into one",
      "Removes duplicate values",
      "Sorts the array"
    ],
    correctAnswer: "Combines two or more arrays into one",
    chapter: 2
  },
  {
    id: 49,
    type: QuestionType.MultipleChoice,
    text: "What is the purpose of the `array_slice()` function?",
    options: [
      "Modifies the original array",
      "Extracts a portion of an array",
      "Merges multiple arrays",
      "Removes elements from an array"
    ],
    correctAnswer: "Extracts a portion of an array",
    chapter: 2
  },
  {
    id: 50,
    type: QuestionType.MultipleChoice,
    text: "What does the `count()` function return?",
    options: [
      "The sum of array values",
      "The number of elements in an array",
      "The unique values in an array",
      "The keys of an array"
    ],
    correctAnswer: "The number of elements in an array",
    chapter: 2
  },
  {
    id: 51,
    type: QuestionType.WriteOutput,
    text: "What is the output of the following PHP code?\n```php\n$x = 5;\n$y = 10;\necho $x + $y;\n```",
    correctAnswer: "15",
    chapter: 2
  },
  {
    id: 52,
    type: QuestionType.WriteOutput,
    text: "What is the output of the following PHP code?\n```php\nfunction myTest() {\n    $x = 10;\n    echo $x;\n}\nmyTest();\necho $x;\n```",
    correctAnswer: "10 (followed by an error: Undefined variable $x)",
    chapter: 2
  },
  {
    id: 53,
    type: QuestionType.WriteOutput,
    text: "What is the output of the following PHP code?\n```php\n$num = 30;\nfunction showNumber() {\n    global $num;\n    echo $num;\n}\nshowNumber();\n```",
    correctAnswer: "30",
    chapter: 2
  },
  {
    id: 54,
    type: QuestionType.WriteOutput,
    text: "What is the output of the following PHP code?\n```php\n$fruits = [\"apple\", \"banana\"];\narray_push($fruits, \"cherry\", \"date\");\narray_pop($fruits);\narray_unshift($fruits, \"grape\");\narray_shift($fruits);\nprint_r($fruits);\n```",
    correctAnswer: "Array ( [0] => apple [1] => banana [2] => cherry )",
    chapter: 2
  },
  {
    id: 55,
    type: QuestionType.WriteOutput,
    text: "What is the output of the following PHP code?\n```php\n$data = [\"a\" => 10, \"b\" => 20, \"c\" => 30];\n$keys = array_keys($data);\nprint_r($keys);\n```",
    correctAnswer: "Array ( [0] => a [1] => b [2] => c )",
    chapter: 2
  },
  {
    id: 56,
    type: QuestionType.Coding,
    text: "Write a PHP program to check if a number is positive, negative, or zero, and output the result.",
    correctAnswer: `$num = 5; // Example number
if ($num > 0) {
    echo "Positive";
} elseif ($num < 0) {
    echo "Negative";
} else {
    echo "Zero";
}`,
    chapter: 2
  },
  {
    id: 57,
    type: QuestionType.Coding,
    text: "Write a PHP program to determine a student's performance level based on their grade:\n- 90 or above: \"Excellent\"\n- 70–89: \"Good\"\n- 50–69: \"Average\"\n- Below 50: \"Fail\"",
    correctAnswer: `$grade = 85; // Example grade
if ($grade >= 90) {
    echo "Excellent";
} elseif ($grade >= 70) {
    echo "Good";
} elseif ($grade >= 50) {
    echo "Average";
} else {
    echo "Fail";
}`,
    chapter: 2
  },
  {
    id: 58,
    type: QuestionType.Coding,
    text: "Write a PHP program using a `for` loop to print numbers from 1 to 10.",
    correctAnswer: `for ($i = 1; $i <= 10; $i++) {
    echo $i . "<br>";
}`,
    chapter: 2
  },
  {
    id: 59,
    type: QuestionType.Coding,
    text: "Write a PHP program to create an array of 5 fruits, add 2 more fruits to the end, remove the first fruit, and print the resulting array.",
    correctAnswer: `$fruits = ["apple", "banana", "cherry", "date", "fig"];
array_push($fruits, "grape", "mango");
array_shift($fruits);
print_r($fruits);`,
    chapter: 2
  },
  {
    id: 60,
    type: QuestionType.Coding,
    text: "Write a PHP program to merge two arrays, `$array1 = [\"a\" => \"apple\", \"b\" => \"banana\"]` and `$array2 = [\"c\" => \"cherry\", \"d\" => \"date\"]`, and print the merged array.",
    correctAnswer: `$array1 = ["a" => "apple", "b" => "banana"];
$array2 = ["c" => "cherry", "d" => "date"];
$result = array_merge($array1, $array2);
print_r($result);`,
    chapter: 2
  },
];

// Chapter 3 Questions - OOP in PHP
const chapter3Questions: Question[] = [
  {
    id: 61,
    type: QuestionType.MultipleChoice,
    text: "What does OOP stand for in PHP?",
    options: [
      "Object-Oriented Programming",
      "Operational Object Processing",
      "Organized Operational Programming",
      "Object-Ordered Processing"
    ],
    correctAnswer: "Object-Oriented Programming",
    chapter: 3
  },
  {
    id: 62,
    type: QuestionType.MultipleChoice,
    text: "What is a class in PHP?",
    options: [
      "A function that performs operations",
      "A template for objects",
      "An instance of an object",
      "A variable container"
    ],
    correctAnswer: "A template for objects",
    chapter: 3
  },
  {
    id: 63,
    type: QuestionType.MultipleChoice,
    text: "How is an object created from a class in PHP?",
    options: [
      "Using the `class` keyword",
      "Using the `new` keyword",
      "Using the `object` keyword",
      "Using the `create` keyword"
    ],
    correctAnswer: "Using the `new` keyword",
    chapter: 3
  },
  {
    id: 64,
    type: QuestionType.MultipleChoice,
    text: "What does the `$this` keyword refer to in PHP?",
    options: [
      "The parent class",
      "The current object",
      "The global scope",
      "The static method"
    ],
    correctAnswer: "The current object",
    chapter: 3
  },
  {
    id: 65,
    type: QuestionType.MultipleChoice,
    text: "What is the purpose of a constructor in PHP?",
    options: [
      "To destroy an object",
      "To initialize object properties upon creation",
      "To define static methods",
      "To restrict access to properties"
    ],
    correctAnswer: "To initialize object properties upon creation",
    chapter: 3
  },
  {
    id: 66,
    type: QuestionType.MultipleChoice,
    text: "How is a constructor defined in PHP?",
    options: [
      "function construct()",
      "function __construct()",
      "function init()",
      "function create()"
    ],
    correctAnswer: "function __construct()",
    chapter: 3
  },
  {
    id: 67,
    type: QuestionType.MultipleChoice,
    text: "When is a destructor called in PHP?",
    options: [
      "When an object is created",
      "When the script starts",
      "When an object is destroyed or script ends",
      "When a metho d is called"
    ],
    correctAnswer: "When an object is destroyed or script ends",
    chapter: 3
  },
  {
    id: 68,
    type: QuestionType.MultipleChoice,
    text: "Which access modifier allows a property to be accessed only within the class?",
    options: [
      "public",
      "protected",
      "private",
      "static"
    ],
    correctAnswer: "private",
    chapter: 3
  },
  {
    id: 69,
    type: QuestionType.MultipleChoice,
    text: "Which access modifier allows access within the class and its subclasses?",
    options: [
      "public",
      "protected",
      "private",
      "static"
    ],
    correctAnswer: "protected",
    chapter: 3
  },
  {
    id: 70,
    type: QuestionType.MultipleChoice,
    text: "How is a class constant declared in PHP?",
    options: [
      "Using the `var` keyword",
      "Using the `const` keyword",
      "Using the `static` keyword",
      "Using the `define` keyword"
    ],
    correctAnswer: "Using the `const` keyword",
    chapter: 3
  },
  {
    id: 71,
    type: QuestionType.WriteOutput,
    text: "What is the output of the following PHP code?\n```php\nclass Car {\n    public $name;\n    function set_name($name) {\n        $this->name = $name;\n    }\n}\n$car = new Car();\n$car->set_name(\"Toyota\");\necho $car->name;\n```",
    correctAnswer: "Toyota",
    chapter: 3
  },
  {
    id: 72,
    type: QuestionType.WriteOutput,
    text: "What is the output of the following PHP code?\n```php\nclass Fruit {\n    public $name;\n    function __construct($name) {\n        $this->name = $name;\n    }\n}\n$fruit = new Fruit(\"Orange\");\necho $fruit->name;\n```",
    correctAnswer: "Orange",
    chapter: 3
  },
  {
    id: 73,
    type: QuestionType.WriteOutput,
    text: "What is the output of the following PHP code?\n```php\nclass Goodbye {\n    const MESSAGE = \"Thank you!\";\n    public function bye() {\n        echo self::MESSAGE;\n    }\n}\n$goodbye = new Goodbye();\n$goodbye->bye();\n```",
    correctAnswer: "Thank you!",
    chapter: 3
  },
  {
    id: 74,
    type: QuestionType.WriteOutput,
    text: "What is the output of the following PHP code?\n```php\ninterface Animal {\n    public function makeSound();\n}\nclass Dog implements Animal {\n    public function makeSound() {\n        echo \"Woof\";\n    }\n}\n$dog = new Dog();\n$dog->makeSound();\n```",
    correctAnswer: "Woof",
    chapter: 3
  },
  {
    id: 75,
    type: QuestionType.WriteOutput,
    text: "What is the output of the following PHP code?\n```php\nclass Greeting {\n    public static function welcome() {\n        echo \"Hello!\";\n    }\n}\nGreeting::welcome();\n```",
    correctAnswer: "Hello!",
    chapter: 3
  },
  {
    id: 76,
    type: QuestionType.Coding,
    text: "Write a PHP script that defines a `Book` class with properties for title and author, includes a constructor to initialize them, and a method to display the book details.",
    correctAnswer: `<?php
class Book {
    public $title;
    public $author;
    
    function __construct($title, $author) {
        $this->title = $title;
        $this->author = $author;
    }
    
    function displayDetails() {
        echo "Title: $this->title, Author: $this->author";
    }
}

$book = new Book("1984", "George Orwell");
$book->displayDetails();
?>`,
    chapter: 3
  },
  {
    id: 77,
    type: QuestionType.Coding,
    text: "Write a PHP script that defines a `Person` class with a private property for name, a constructor, and public methods to set and get the name.",
    correctAnswer: `<?php
class Person {
    private $name;
    
    function __construct($name) {
        $this->name = $name;
    }
    
    public function set_name($name) {
        $this->name = $name;
    }
    
    public function get_name() {
        return $this->name;
    }
}

$person = new Person("John");
echo $person->get_name();
?>`,
    chapter: 3
  },
  {
    id: 78,
    type: QuestionType.Coding,
    text: "Write a PHP script that creates a `Math` class with a constant for PI and a static method to calculate the area of a circle given its radius.",
    correctAnswer: `<?php
class Math {
    const PI = 3.14159;
    
    public static function circleArea($radius) {
        return self::PI * $radius * $radius;
    }
}

echo Math::circleArea(5);
?>`,
    chapter: 3
  },
  {
    id: 79,
    type: QuestionType.Coding,
    text: "Write a PHP script that defines an `Animal` interface with a `move` method and a `Bird` class that implements it to output \"Flying\".",
    correctAnswer: `<?php
interface Animal {
    public function move();
}

class Bird implements Animal {
    public function move() {
        echo "Flying";
    }
}

$bird = new Bird();
$bird->move();
?>`,
    chapter: 3
  },
  {
    id: 80,
    type: QuestionType.Coding,
    text: "Write a PHP script that uses a namespace `Shapes` to define a `Circle` class with a method to calculate its area, and instantiate it from outside the namespace using an alias.",
    correctAnswer: `<?php
namespace Shapes;

class Circle {
    public function calculateArea($radius) {
        return 3.14159 * $radius * $radius;
    }
}

use Shapes\\Circle as C;

$circle = new C();
echo $circle->calculateArea(10);
?>`,
    chapter: 3
  }
];

// Chapter 4 Questions - File Handling
const chapter4Questions: Question[] = [
  {
    id: 91,
    type: QuestionType.MultipleChoice,
    text: "What does PHP's `readfile()` function do?",
    options: [
      "Writes data to a file",
      "Reads a file and outputs it to the buffer",
      "Deletes a file",
      "Creates a new file"
    ],
    correctAnswer: "Reads a file and outputs it to the buffer",
    chapter: 4
  },
  {
    id: 92,
    type: QuestionType.MultipleChoice,
    text: "Which function is used to open a file in PHP?",
    options: [
      "fopen()",
      "fwrite()",
      "fread()",
      "fclose()"
    ],
    correctAnswer: "fopen()",
    chapter: 4
  },
  {
    id: 93,
    type: QuestionType.MultipleChoice,
    text: "What happens if you open a non-existent file with mode 'r'?",
    options: [
      "A new file is created",
      "The script fails with an error",
      "The file is opened in write mode",
      "The script continues without error"
    ],
    correctAnswer: "The script fails with an error",
    chapter: 4
  },
  {
    id: 94,
    type: QuestionType.MultipleChoice,
    text: "Which mode in `fopen()` allows both reading and writing, preserving existing data?",
    options: [
      "r",
      "w",
      "a+",
      "x"
    ],
    correctAnswer: "a+",
    chapter: 4
  },
  {
    id: 95,
    type: QuestionType.MultipleChoice,
    text: "What does `fclose()` do in PHP?",
    options: [
      "Deletes a file",
      "Closes an open file handle",
      "Reads a file",
      "Writes to a file"
    ],
    correctAnswer: "Closes an open file handle",
    chapter: 4
  },
  {
    id: 96,
    type: QuestionType.MultipleChoice,
    text: "Which function reads a single line from a file?",
    options: [
      "fread()",
      "fgets()",
      "fgetc()",
      "feof()"
    ],
    correctAnswer: "fgets()",
    chapter: 4
  },
  {
    id: 97,
    type: QuestionType.MultipleChoice,
    text: "What does `feof()` check in PHP?",
    options: [
      "If a file exists",
      "If the end of file is reached",
      "If a file is writable",
      "If a file is locked"
    ],
    correctAnswer: "If the end of file is reached",
    chapter: 4
  },
  {
    id: 98,
    type: QuestionType.MultipleChoice,
    text: "Which function is used to write to a file in PHP?",
    options: [
      "fwrite()",
      "fread()",
      "fopen()",
      "fclose()"
    ],
    correctAnswer: "fwrite()",
    chapter: 4
  },
  {
    id: 99,
    type: QuestionType.MultipleChoice,
    text: "What does the `move_uploaded_file()` function do?",
    options: [
      "Deletes an uploaded file",
      "Moves an uploaded file to a new location",
      "Reads an uploaded file",
      "Validates an uploaded file"
    ],
    correctAnswer: "Moves an uploaded file to a new location",
    chapter: 4
  },
  {
    id: 100,
    type: QuestionType.MultipleChoice,
    text: "Which function locks a file to prevent concurrent access?",
    options: [
      "flock()",
      "fopen()",
      "fclose()",
      "fwrite()"
    ],
    correctAnswer: "flock()",
    chapter: 4
  },
  {
    id: 101,
    type: QuestionType.WriteOutput,
    text: "What is the output of the following PHP code?\n```php\n$file = fopen(\"test.txt\", \"w\");\nfwrite($file, \"Hello\");\nfclose($file);\n$file = fopen(\"test.txt\", \"r\");\necho fread($file, filesize(\"test.txt\"));\nfclose($file);\n```",
    correctAnswer: "Hello",
    chapter: 4
  },
  {
    id: 102,
    type: QuestionType.WriteOutput,
    text: "What is the output of the following PHP code?\n```php\n$filename = \"data.txt\";\nif (file_exists($filename)) {\n    echo readfile($filename);\n} else {\n    echo \"File not found\";\n}\n```\n(Assume `data.txt` does not exist.)",
    correctAnswer: "File not found",
    chapter: 4
  },
  {
    id: 103,
    type: QuestionType.WriteOutput,
    text: "What is the output of the following PHP code?\n```php\n$file = fopen(\"webdictionary.txt\", \"r\");\necho fgets($file);\nfclose($file);\n```\n(Assume `webdictionary.txt` contains:\n```\nAJAX = Asynchronous JavaScript and XML\nCSS = Cascading Style Sheets\n```)",
    correctAnswer: "AJAX = Asynchronous JavaScript and XML",
    chapter: 4
  },
  {
    id: 104,
    type: QuestionType.WriteOutput,
    text: "What is the output of the following PHP code?\n```php\n$filename = \"example.txt\";\nif (preg_match(\"/^[a-zA-Z0-9_]*$/\", $filename)) {\n    echo \"Valid filename\";\n} else {\n    echo \"Invalid filename\";\n}\n```",
    correctAnswer: "Valid filename",
    chapter: 4
  },
  {
    id: 105,
    type: QuestionType.WriteOutput,
    text: "What is the output of the following PHP code?\n```php\n$dir = \"uploads\";\nif (is_dir($dir)) {\n    echo \"Directory exists\";\n} else {\n    echo \"Directory does not exist\";\n}\n```\n(Assume the `uploads` directory exists.)",
    correctAnswer: "Directory exists",
    chapter: 4
  },
  {
    id: 106,
    type: QuestionType.Coding,
    text: "Write a PHP script that creates a file `log.txt` and writes \"Log Entry\" to it.",
    correctAnswer: `<?php
$file = fopen("log.txt", "w") or die("Unable to open file!");
fwrite($file, "Log Entry");
fclose($file);
echo "File written successfully";
?>`,
    chapter: 4
  },
  {
    id: 107,
    type: QuestionType.Coding,
    text: "Write a PHP script that reads and displays the contents of `data.txt`, handling errors if the file does not exist.",
    correctAnswer: `<?php
$filename = "data.txt";
if (file_exists($filename)) {
    $file = fopen($filename, "r");
    echo fread($file, filesize($filename));
    fclose($file);
} else {
    echo "Error: File not found!";
}
?>`,
    chapter: 4
  },
  {
    id: 108,
    type: QuestionType.Coding,
    text: "Write a PHP script that validates a file name using regex to allow only letters, numbers, and underscores, and displays if valid or invalid.",
    correctAnswer: `<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $filename = $_POST["filename"];
    if (preg_match("/^[a-zA-Z0-9_]*$/", $filename)) {
        echo "Valid filename";
    } else {
        echo "Invalid filename: Only letters, numbers, and underscores allowed";
    }
}
?>
<html>
<body>
<form action="" method="post">
    Filename: <input type="text" name="filename">
    <input type="submit" value="Submit">
</form>
</body>
</html>`,
    chapter: 4
  },
  {
    id: 109,
    type: QuestionType.Coding,
    text: "Write a PHP script that uploads an image file, restricts it to JPG/PNG, and checks if it's under 500KB.",
    correctAnswer: `<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $target_dir = "uploads/";
    $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
    $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
    $uploadOk = 1;

    if ($_FILES["fileToUpload"]["size"] > 500000) {
        echo "Sorry, your file is too large.";
        $uploadOk = 0;
    }

    if ($imageFileType != "jpg" && $imageFileType != "png") {
        echo "Sorry, only JPG and PNG files are allowed.";
        $uploadOk = 0;
    }

    if ($uploadOk && move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
        echo "The file ". basename($_FILES["fileToUpload"]["name"]). " has been uploaded.";
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}
?>
<html>
<body>
<form action="" method="post" enctype="multipart/form-data">
    Select image to upload:
    <input type="file" name="fileToUpload" id="fileToUpload">
    <input type="submit" value="Upload Image" name="submit">
</form>
</body>
</html>`,
    chapter: 4
  },
  {
    id: 110,
    type: QuestionType.Coding,
    text: "Write a PHP script that creates a directory `backup`, lists its contents using `scandir()`, and skips `.` and `..` entries.",
    correctAnswer: `<?php
$dir = "backup";
if (!is_dir($dir)) {
    mkdir($dir);
    echo "Directory created<br>";
}

$files = scandir($dir);
foreach ($files as $file) {
    if ($file != "." && $file != "..") {
        echo "File: $file<br>";
    }
}
?>`,
    chapter: 4
  }
];

export const chapters: Chapter[] = [
  {
    id: 1,
    title: "Chapter 1: Forms and Regular Expressions",
    description: "This chapter covers HTML forms, GET and POST methods, form handling with PHP, and regular expressions.",
    questions: chapter1Questions
  },
  {
    id: 2,
    title: "Chapter 2: PHP Basics and Arrays",
    description: "This chapter covers the basics of PHP programming, including variables, control structures, and array functions.",
    questions: chapter2Questions
  },
  {
    id: 3,
    title: "Chapter 3: Object-Oriented Programming in PHP",
    description: "Learn about classes, objects, inheritance, interfaces, and other OOP concepts in PHP.",
    questions: chapter3Questions
  },
  {
    id: 4,
    title: "Chapter 4: File Handling and System Functions",
    description: "Master file operations, directory handling, and system functions in PHP.",
    questions: chapter4Questions
  }
];

export const allQuestions: Question[] = [
  ...chapter1Questions,
  ...chapter2Questions,
  ...chapter3Questions,
  ...chapter4Questions
];