var skills =
    {
        "Package_Management": ["Bower", "Composer", 'npmjs'],
        "Version_Control_System": ["Git"],
        "Java_script": ["AngularJS", 'Underscore.js'],
    }
    ;


_.each(skills.Java_script, function (name, num) {
        console.log(num + 1 + "." + name);
        document.write(num + 1 + "." + name);
        document.write("<br>");
    }
)
;


