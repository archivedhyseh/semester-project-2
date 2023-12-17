export function renderError(target) {
  target.innerHTML = `
  <div class="mx-auto max-w-6xl">
    <div class="flex h-[50vh] max-h-[40rem] min-h-[30rem] px-3 my-5">
      <div class="flex h-full w-full flex-col items-center justify-center gap-5 rounded-md bg-neutral-50 p-3">
        <div class="flex w-full max-w-[28rem] flex-col gap-5">
          <h2 class="text-2xl font-bold md:text-4xl">Something went wrong</h2>
          <p class="text-lg font-medium md:text-xl">We apologize for the inconvenience.</p>
          <div class="flex flex-col gap-3">
            <p>
              Seems like an unexpected error occurred. Please refresh the
              page or try again later. If the problem persists, feel free
              to contact our support team for further assistance.
            </p>
            <p>Thank you for your understanding.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
}
