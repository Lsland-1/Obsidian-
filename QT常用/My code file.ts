QString strPrcName = ui->ModuleName->text();
    if (strPrcName.isEmpty()) strPrcName = "" ;
    if ("" == strPrcName)return;
    m_pVmPrc = (IVmProcedure *)(*m_pVmSol)[strPrcName.toStdString().c_str()];
    if (NULL == m_pVmPrc) return;
//    m_pVmPrc->Run();
//        IMVSL2LMeasureModuTool * pL2LMeasureObject = (IMVSL2LMeasureModuTool *)(*m_pVmSol)[ch];
//        if (NULL == pL2LMeasureObject) return;
//        L2LMeasureParams * pL2LMeasureParam = pL2LMeasureObject->GetParamObj();
//        if (NULL == pL2LMeasureParam) return;
//        void * pParamData = pL2LMeasureParam->GetControlInfo();
//        if (NULL == pParamData) return;
//        qlonglong pRenderData = (qlonglong)pParamData;
//        ui->axWidgetParam->dynamicCall("SetParamsInfo(qlonglong)", pRenderData);
//        ui->textEdit->setText(QDateTime::currentDateTime().toString());




//    ModuleInfoList *pModuListThisLayer = m_pVmPrc->GetProcedureModuleList();
//    if (NULL == pModuListThisLayer) return;
//    int num =pModuListThisLayer->nNum;   //模块个数
//    ui->textEdit_2->append(QString::number(num));
//    if (NULL == num) return;
//    for (int i=0; i <num ;i++ ) {
//        ModuInfo ModuInformation = pModuListThisLayer->astModuleInfo[i];
//        char* strDisplay = ModuInformation.strDisplayName;
//        QString ModuleName = ModuInformation.strModuleName;
//        QByteArray ba =  (strPrcName + "." + strDisplay).toUtf8(); // must
//        const char* ch=ba.data();
//        if("ImageSource3DModule" == ModuleName ){
//            ui->textEdit->append(ch);


//            ui->textEdit->append( "1111111111111");
//            ImageSourceModuleTool * pImageSourceObject = (ImageSourceModuleTool *)(*m_pVmSol)["流程1.3D图像源1"];
//            if (NULL == pImageSourceObject) return;
//            ImageSourceParams * pImageSourceParam = pImageSourceObject->GetParamObj();
//            if (NULL == pImageSourceParam) return;
//            ui->textEdit->append( "2222222222222");


//            void * pParamData = pImageSourceParam->GetControlInfo();
//            if (NULL == pParamData) return;
//            qlonglong pRenderData = (qlonglong)pParamData;
//            ui->axWidgetParam->dynamicCall("SetParamsInfo(qlonglong)", pRenderData);
//            ui->textEdit->setText(QDateTime::currentDateTime().toString());
//            IMVSCircleFindModuTool * paramRenderCtrlCircleTool = (IMVSCircleFindModuTool *)(*m_pVmSol)["流程1.圆查找1"];
//            void * paramRenderCtrlParamData = paramRenderCtrlCircleTool->GetParamObj()->GetControlInfo();
//            qlonglong paramRenderCtrlPData = (qlonglong)paramRenderCtrlParamData;

            


//        }


//    }