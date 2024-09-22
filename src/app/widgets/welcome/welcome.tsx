export function Welcome() {
  return (
    <div className="px-6 mx-auto md:px-20 max-w-viewport">
      <div className="max-w-inside">
        <div className="bg-[url('/assets/welcome.png')] h-[400px] bg-cover my-16  rounded-[30px] p-16 text-textClear">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl">
              <b>Hello World!</b>
            </h2>
          </div>

          <div className="flex mt-8 mb-6 md:mb-4 lg:justify-end lg:mt-24">
            <div>
              <h3 className="text-2xl">
                <b>About me</b>
              </h3>
              <p className="text-sm md:text-base">
                I like to create, experiment and share ideas worth living for!
                <br />
                Get to know my initiatives!
              </p>
            </div>
          </div>

          <div>
            <div>photo by me</div>
            <small>@ Barra da Estiva</small>
          </div>
        </div>
      </div>
    </div>
  );
}
