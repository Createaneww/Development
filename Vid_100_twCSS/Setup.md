## How setup TailwindCSS
Follow the commands to setup Tailwind CSS

Step1: Run the commands
`````
npm install -D tailwindcss@3
npx tailwindcss init

`````

Step:2 update tailwind.confg.js file to include this line

````
content: ["./src/**/*.{html,js}"],
````

Step:3 create src/input.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Step:4  include src/output.css into your html file

Step:5 Run the following command

```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```


