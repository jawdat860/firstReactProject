import FormInput from "./FormInput";

function Form(props){
function dataHandler(data){
 props.data(data)
}
    return(
        <div>
            <FormInput data={dataHandler}/>
        </div>
    )
}
export default Form;