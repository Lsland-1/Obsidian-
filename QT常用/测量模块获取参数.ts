//线线测量
//线线测量
IMVSL2LMeasureModuTool * plineMeaModule = (IMVSL2LMeasureModuTool *)(*m_pVmSol)[ch];
L2LMeasureResults * plineMeaParam = plineMeaModule->GetResult();
int pL2LStateParamData = plineMeaParam->GetModuStatus();
float pL2LDistParamData = plineMeaParam->GetVerticalAbsDist();
float pL2LAngleParamData = plineMeaParam->GetAngle();

//圆圆测量
IMVSC2CMeasureModuTool * pCircleMeaModule = (IMVSC2CMeasureModuTool *)(*m_pVmSol)[ch];
C2CMeasureResults * pCircleMeaParam = pCircleMeaModule->GetResult();
float pC2CDistParamData = pCircleMeaParam->GetDist();


//点点测量
IMVSP2PMeasureModuTool * pDotMeaModule = (IMVSP2PMeasureModuTool *)(*m_pVmSol)[ch];
P2PMeasureResults * pDotMeaParam = pDotMeaModule->GetResult();
float pP2PDistParamData = pDotMeaParam->GetDist();


//线圆测量
IMVSL2CMeasureModuTool * pL2CMeaModule = (IMVSL2CMeasureModuTool *)(*m_pVmSol)[ch];
L2CMeasureResults * pL2CMeaParam = pL2CMeaModule->GetResult();
float pL2CDistParamData = pL2CMeaParam->GetDist();

//点圆测量
IMVSP2CMeasureModuTool * pP2CMeaModule = (IMVSP2CMeasureModuTool *)(*m_pVmSol)[ch];
P2CMeasureResults * pP2CMeaParam = pP2CMeaModule->GetResult();
float pP2CDistParamData  = pP2CMeaParam->GetCenterDist();

//点线测量
IMVSP2LMeasureModuTool * pP2LMeaModule = (IMVSP2LMeasureModuTool *)(*m_pVmSol)[ch];
P2LMeasureResults * pP2LMeaParam = pP2LMeaModule->GetResult();
float pP2LDistParamData  = pP2LMeaParam->GetVerticalDist();