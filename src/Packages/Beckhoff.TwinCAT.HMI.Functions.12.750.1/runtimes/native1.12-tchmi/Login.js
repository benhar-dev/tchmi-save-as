var TcHmi;!function(TcHmi){let Functions;!function(Functions){let Beckhoff;!function(Beckhoff){Beckhoff.Login=function(username,password,persistent=!0,reload=!0){return TcHmi.Server.loginEx2(username,password,persistent,reload,null,data=>{data.error!==TcHmi.Errors.NONE&&TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.error("[Source=Framework, Module=TcHmi.Functions.Beckhoff.Login] "+TcHmi.Log.buildMessage(data.details))})}}(Beckhoff=Functions.Beckhoff||(Functions.Beckhoff={}))}(Functions=TcHmi.Functions||(TcHmi.Functions={}))}(TcHmi||(TcHmi={})),TcHmi.Functions.registerFunctionEx("Login","TcHmi.Functions.Beckhoff",TcHmi.Functions.Beckhoff.Login);