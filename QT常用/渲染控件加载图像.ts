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

//线线测量渲染
IMVSL2LMeasureModuTool * pL2LMeasureObject = (IMVSL2LMeasureModuTool *)(*m_pVmSol)["流程1.线线测量1"];
void* renderCtrlParamData = pL2LMeasureObject->GetParamObj()->GetControlInfo();
qlonglong renderCtrlPData = (qlonglong)renderCtrlParamData;
ui->axWidgetParam->dynamicCall("SetParamsInfo(qlonglong)", renderCtrlPData);

//圆圆测量渲染
IMVSC2CMeasureModuTool * pC2CMeasureObject = (IMVSC2CMeasureModuTool *)(*m_pVmSol)["流程1.圆圆测量1"];
void* renderCtrlParamData = pC2CMeasureObject->GetParamObj()->GetControlInfo();
qlonglong renderCtrlPData = (qlonglong)renderCtrlParamData;
ui->axWidgetParam->dynamicCall("SetParamsInfo(qlonglong)", renderCtrlPData);

//点点测量渲染
IMVSP2PMeasureModuTool * pP2PMeasureObject = (IMVSP2PMeasureModuTool *)(*m_pVmSol)["流程1.点点测量1"];
void* renderCtrlParamData = pP2PMeasureObject->GetParamObj()->GetControlInfo();
qlonglong renderCtrlPData = (qlonglong)renderCtrlParamData;
ui->axWidgetParam->dynamicCall("SetParamsInfo(qlonglong)", renderCtrlPData);

//线圆测量渲染
IMVSL2CMeasureModuTool * pL2CMeasureObject = (IMVSL2CMeasureModuTool *)(*m_pVmSol)["流程1.线圆测量1"];
void* renderCtrlParamData = pL2CMeasureObject->GetParamObj()->GetControlInfo();
qlonglong renderCtrlPData = (qlonglong)renderCtrlParamData;
ui->axWidgetParam->dynamicCall("SetParamsInfo(qlonglong)", renderCtrlPData);

//点圆测量渲染
IMVSP2CMeasureModuTool * pP2CMeasureObject = (IMVSP2CMeasureModuTool *)(*m_pVmSol)["流程1.点圆测量1"];
void* renderCtrlParamData = pP2CMeasureObject->GetParamObj()->GetControlInfo();
qlonglong renderCtrlPData = (qlonglong)renderCtrlParamData;
ui->axWidgetParam->dynamicCall("SetParamsInfo(qlonglong)", renderCtrlPData);

//点线测量渲染
IMVSP2LMeasureModuTool * pP2LMeasureObject = (IMVSP2LMeasureModuTool *)(*m_pVmSol)["流程1.点线测量1"];
void* renderCtrlParamData = pP2LMeasureObject->GetParamObj()->GetControlInfo();
qlonglong renderCtrlPData = (qlonglong)renderCtrlParamData;
ui->axWidgetParam->dynamicCall("SetParamsInfo(qlonglong)", renderCtrlPData);

