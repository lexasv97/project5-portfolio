
export default function Skills() {

  const categories = [
    {
      category: 'Languages',
      skills: [
        "JavaScript", "TypeScript"
      ]
    },
    {
      category: 'Core',
      skills: [
        "HTML/HTML5", "CSS/CSS3", "DOM", "Async/Await", "OOP"
      ]
    },
    {
      category: 'Databases',
      skills: [
        "MongoDB", "PostgreSQL", "NoSQL"
      ]
    },
    {
      category: 'Libraries',
      skills: [
        "React", "Redux", "Mongoose ODM", "Immutable.js", "jQuery", "axios"
      ]
    },
    {
      category: 'Frameworks',
      skills: [
        "Express.js", "Next.js", "Tailwind CSS", "Jest.js"
      ]
    },
    {
      category: 'Environments',
      skills: [
        "Node.js"
      ]
    },
    {
      category: 'Cloud',
      skills: [
        "AWS"
      ]
    },
    {
      category: 'Version Control',
      skills: [
        "Git"
      ]
    },
  ];

  const other = {
    category: "Other",
    skills: [
      "REST APIs", "JWT", "Postman", "JSX", "Vite", "Webpack", "JSON", "AJAX"
    ]
  }

  return (
    <div className="h-screen bg-grey">
      <div className="p-20">
        <div>
          <h1 className="flex justify-center about_me lg:text-5xl pb-10">Skills</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat) => {
            return (
              <div className="flex flex-col">
                <h2 className="categories text-3xl pb-10 flex justify-center">{cat.category}</h2>
                {
                  cat.skills.map((skill) => {
                    return (
                        <span className="passionate text-xl lg:px-24">{skill}</span>
                    )
                  })
                }
              </div>
            )
          })}
        </div>
        <div>
          <h2 className="categories text-3xl pb-10 flex justify-center">{other.category}</h2>
          <div className="flex justify-evenly px-40">
            {
              other.skills.map((skill) => {
                return (
                    <span className="passionate text-xl">{skill}</span>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}