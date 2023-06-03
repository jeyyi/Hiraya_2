import { useState, React } from "react";

function Login() {

  const [isActive, setActive] = useState(false);
  return (
    <>
      {/* Modal*/}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box alert alert-error shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Get a registration code from your admin</span>
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              OK
            </label>
          </div>
        </div>
      </div>
      {/*End of Modal */}
      <div className="grid h-screen place-items-center bg-gray-600">
        <div className="hidden lg:flex h-3/4 w-3/4 bg-white">
          {/*Hero section start */}
          <div className="h-full w-1/2 bg-blue-400">
            <div className="hero min-h-full bg-bgFight bg-cover bg-center">
              <div className="hero-overlay bg-opacity-70"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">WELCOME ADMIN</h1>
                  <p className="mb-5">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque
                    aut repudiandae et a id nisi.
                  </p>
                  <button className="btn btn-accent">Get Started</button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start h-full w-1/2 p-20 space-y-5">
            <a className="btn btn-ghost normal-case text-5xl" href="login">
              hiraya
            </a>
            <p className="text-gray-300 text-lg pt-20">Login Page</p>
            <div className="form-control w-full max-w-xs pt-5">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            {/* Wrong password pop-up */}
            <p className="text-red-500 hidden">Wrong Username or Password</p>
            <a
              className={
                isActive
                  ? `btn loading w-full max-w-xs`
                  : `btn btn-active w-full max-w-xs`
              }
              href = "/"
            >
              {isActive ? `loading` : `login`}
            </a>
            <div className="divider text-gray-300 text-md pt-5">or</div>
            {/* The button to open modal */}
            <label htmlFor="my-modal" className="link text-gray-400 text-md">
              Register an Account
            </label>
          </div>
        </div>
        {/* Mobile login */}
        <div className="flex flex-col artboard phone-1 lg:hidden bg-white items-center rounded-lg p-5 space-y-2">
          <a className="btn btn-ghost normal-case text-5xl pt-10" href="login">
            hiraya
          </a>
          <p className="text-gray-300 text-lg pt-10">Login Page</p>
          <div className="form-control w-full max-w-xs pt-5">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <buton
            className={
              isActive
                ? `btn loading w-full max-w-xs`
                : `btn btn-active w-full max-w-xs`
            }
            onClick={setActive}
          >
            {isActive ? `loading` : `login`}
          </buton>
          <div className="divider text-gray-300 text-md pt-5">or</div>
          {/* The button to open modal */}
          <label htmlFor="my-modal" className="link text-gray-400 text-md">
            Register an Account
          </label>
        </div>
      </div>
    </>
  );
}

export default Login;
