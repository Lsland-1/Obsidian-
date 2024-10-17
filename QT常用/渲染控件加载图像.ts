//图像源模块
ImageSourceModuleTool * ImageSourceTool = (ImageSourceModuleTool *)(*m_pVmSol)["流程1.图像源1"];
void* ImageSourceToolParamData = ImageSourceTool->GetParamObj()->GetControlInfo();
qlonglong renderCtrlPData = (qlonglong)ImageSourceToolParamData;
ui->axWidgetParam->dynamicCall("SetParamsInfo(qlonglong)", renderCtrlPData);

//圆查找模块
IMVSCircleFindModuTool * renderCtrlCircleTool = (IMVSCircleFindModuTool *)(*m_pVmSol)["流程1.圆查找1"];
void* renderCtrlParamData = renderCtrlCircleTool->GetParamObj()->GetControlInfo();
qlonglong renderCtrlPData = (qlonglong)renderCtrlParamData;
ui->axWidgetParam->dynamicCall("SetParamsInfo(qlonglong)", renderCtrlPData);

