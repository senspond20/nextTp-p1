import React from "react";
import TuiEditor, {InitEditorType} from "@components/editor/TuiEditor";

const MyEditor = () =>(
    <TuiEditor initialValue={"안녕"} initialEditType={InitEditorType.html}/>
);
export default MyEditor;