import { Outlet } from "react-router-dom"

const CrudLayout = () => {
  return (
    <>
    <div className="bg-cyan-900">
        <div className="max-w-max m-auto text-slate-50 h-10 text-center flex items-center">Make CRUD operation here.</div>
    </div>
            <Outlet/>
    </>
  )
}

export default CrudLayout