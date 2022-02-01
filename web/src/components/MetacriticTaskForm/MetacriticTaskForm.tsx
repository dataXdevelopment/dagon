import { Form, Label, RadioField, TextField } from '@redwoodjs/forms'

const MetacriticTaskForm = () => {
  return (
    <Form>
      <div>
        <label className="text-sm text-gray-600 false" htmlFor="email">
          Task Name
        </label>
        <div>
          <TextField
            name="task_name"
            className="w-full border border-gray-300 rounded-sm px-4 py-3 outline-none transition-colors duration-150 ease-in-out focus:border-blue-400"
          />
        </div>
      </div>
      <div>
        <label
          className="mb-4 text-sm text-gray-600 inline-block"
          htmlFor="color"
        >
          Media Type
        </label>
        <div className="flex flex-wrap">
          <div className="flex items-center mr-4">
            <RadioField
              name="color"
              className="appearance-none w-6 h-6 border border-gray-300 rounded-full outline-none cursor-pointer checked:bg-blue-400"
              id="red-color"
              value="red"
            />
            <label className="ml-2 text-sm" htmlFor="red-color">
              Red
            </label>
          </div>
          <div className="flex items-center mr-4">
            <RadioField
              name="color"
              className="appearance-none w-6 h-6 border border-gray-300 rounded-full outline-none cursor-pointer checked:bg-blue-400"
              id="blue-color"
              value="blue"
            />
            <label className="ml-2 text-sm" htmlFor="blue-color">
              Blue
            </label>
          </div>
          <div className="flex items-center mr-4">
            <RadioField
              name="color"
              className="appearance-none w-6 h-6 border border-gray-300 rounded-full outline-none cursor-pointer checked:bg-blue-400"
              id="pink-color"
              value="pink"
            />
            <label className="ml-2 text-sm" htmlFor="pink-color">
              Pink
            </label>
          </div>
        </div>
      </div>
    </Form>
  )
}

export default MetacriticTaskForm
