export function ruleForm(showForm, setShowForm, rule) {
    if (!showForm) return
    
    return (
        <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div class="fixed w-full inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full max-w-3xl">
                    <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div class="flex">
                        <div className=" items-start w-full">
                            <div class="mt-3 text-center my-4 sm:mt-0 sm:text-left">
                                <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">{rule ? 'Edit' : 'Create new'} Rule</h3>
                                <div class="mt-2">
                                    <form id="rule-form" onSubmit={(data) => handleSubmit(data)}>
                                        <div class="mt-10 grid grid-cols-12 gap-x-6 gap-y-8 ">
                                            <div class="col-span-4">
                                                <label for="field_1" class="block text-sm font-medium leading-6 text-gray-900">Parameter </label>
                                                <div class="mt-2">
                                                    <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                                                        <input type="text" value={rule?.field_1} name="field_1" id="field_1" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="merchant_id"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-span-4">
                                                <label for="operator" class="block text-sm font-medium leading-6 text-gray-900">Operator</label>
                                                <div class="mt-2">
                                                    <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                                                        <select value={rule?.operator} id="operator" name="operator" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                                            <option value="==">Equals to</option>
                                                            <option value="!=">Different than</option>
                                                            <option value=">=">More or equal than</option>
                                                            <option value="<=">Less or equal than</option>
                                                            <option value=">">More than</option>
                                                            <option value="<">Less than</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-span-4">
                                                <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Field 2</label>
                                                <div class="mt-2">
                                                    <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                                                        <input value={rule?.field_2} type="text" name="field_2" id="field_2" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="20"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-span-12">
                                                <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Motive</label>
                                                <div class="mt-2">
                                                    <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                                                        <input value={rule?.reason} type="text" name="motive" id="motive" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="The demonstration merchant never produces frauds"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-span-4 col-start-2">
                                                <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Recomendation</label>
                                                <div class="mt-2 space-y-6">
                                                    <div class="flex items-center gap-x-3">
                                                        <input checked id="recommendation-reject" value="reject" name="recommendation" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                                        <label for="recommendation-reject" class="block text-sm font-medium leading-6 text-gray-900">Reject</label>
                                                    
                                                        <input id="recommendation-approve" value="approve" name="recommendation" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                                        <label for="recommendation-approve" class="block text-sm font-medium leading-6 text-gray-900">Approve</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-span-6">
                                                <label for="priority" class="block text-sm font-medium leading-6 text-gray-900">Priority</label>
                                                <div class="mt-2">
                                                    <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                                                        <input value={rule?.priority} type="number" input="numeric" name="priority" id="priority" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="0"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <input type="submit" form="rule-form" value="Save" class="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"/>
                    <button onClick={() => setShowForm(false)} type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

async function handleSubmit(data) {
    await fetch('http://localhost:5000/add', {
        method: 'POST',
        mode: "no-cors",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            'field_1': data.target.field_1.value,
            'field_2': data.target.field_2.value,
            'operator': data.target.operator.value,
            'recommendation': data.target.recommendation.value,
            'reason': data.target.motive.value,
            'priority': data.target.priority.value
        })
    })
    .then(checkStatus)
    .then(reponse => {
        console.log('request succeeded with JSON response', data);
    }).catch(err => {
        console.log('request failed', err);
    });
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      console.log("status: ", response.statusText);
      return response
    } else {
      var error = new Error(response.statusText)
      error.response = response
      throw error
    }
  }