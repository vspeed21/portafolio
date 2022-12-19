
function ContactHome() {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary mt-16 py-16 md:py-10">
      <div className='text-center text-white'>
        <h3 className="text-5xl font-bold">Contact me!</h3>
        <p className="text-lg">Do you want to make a website for your company?</p>

        <div className='flex gap-4 justify-center mt-5'>
          <a 
            href='mailito:vtorresquintanilla0206@gmail.com'
            className="border-2 border-secondary p-1 hover:bg-secondary transition-colors duration-300 font-bold px-2"
          >
            Mail
          </a>

          <a 
            href='https://api.whatsapp.com/send?phone=50499152520'
            target='_blank'
            rel="noopener noreferrer"
            className="border-2 border-[#1BD741] p-1 hover:bg-[#1BD741] transition-colors duration-300 font-bold px-2"
          >
            Whatsapp
          </a>
        </div>

      </div>
    </section>
  )
}

export default ContactHome