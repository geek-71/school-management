function DisplayCount({data}) {
  const {icon,title,value} = data;
  return (
    <div className="align-middle p-10 shadow-lg rounded-lg text-center w-60 gap-2">
        <div className="flex justify-center w-full p-2">{icon}</div>
        <p className="texl-lg">{title}</p>
        <p className="text-green-500 text-xl">{value}</p>
    </div>
  )
}
export default DisplayCount