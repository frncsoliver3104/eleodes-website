const Creators = () => {
  const teamMembers = [
    {
      name: 'Elea Belle P. Jabuen',
      role: 'Team Leader | Documentation',
    },
    {
      name: 'Vence Mark Barrida',
      role: 'UI/UX Designer',
    },
    {
      name: 'James Benedict Projillo',
      role: 'IoT Developer',
    },
    {
      name: 'Renz Jan Limas',
      role: 'Front-End / Back-End Developer',
    },
    {
      name: 'Francis Oliver Villanueva',
      role: 'Front-End Developer',
    },
  ]

  return (
    <section id="creators" className="bg-white px-6 py-20 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#00c896]">
            Meet the Creators
          </p>
          <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">
            Behind Eleodes is a passionate team of BSIT students.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            Behind Eleodes is a team of passionate Bachelor of Science in Information Technology (BSIT) students from the Western Institute of Technology dedicated to developing innovative and sustainable solutions for real-world challenges.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            Through the integration of Atmospheric Water Generation and Internet of Things (IoT) technology, our team aims to improve access to clean, potable drinking water.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <h3 className="mb-6 text-2xl font-semibold text-slate-950">Research Team</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {teamMembers.map((member) => (
              <div key={member.name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h4 className="text-lg font-semibold text-slate-950">{member.name}</h4>
                <p className="mt-1 text-sm text-slate-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Creators
