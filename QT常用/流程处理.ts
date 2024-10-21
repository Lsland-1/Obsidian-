//遍历流程中的模块
ModuleInfoList *pModuListThisLayer = m_pVmPrc->GetProcedureModuleList();
int num =pModuListThisLayer->nNum;  //模块个数
for(int i=0;i<num;i++){
    ModuleID = (pModuListThisLayer->astModuleInfo[i]).nModuleID;  //模块ID
    char* strModuleName = (pModuListThisLayer->astModuleInfo[i]).strModuleName;   //模块名
    char* strDisplayName = (pModuListThisLayer->astModuleInfo[i]).strDisplayName;  //显示名
}


