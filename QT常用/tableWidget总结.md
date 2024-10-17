表头设置：

```cpp
功能函数：
ui->tableWidget->setSelectionBehavior(QAbstractItemView::SelectRows); //设置整行选中
ui->tableWidget->setEditTriggers(QAbstractItemView::NoEditTriggers);  //冻结表格
ui->tableWidget->setAlternatingRowColors(true); // 隔行变色
ui->tableWidget->setPalette(QPalette(Qt::gray)); // 设置隔行变色的颜色  gray灰色
ui->tableWidget->setStyleSheet("QTableView {gridline-color: black; border_inside: 2px solid black;}");   //设置框线
ui->tableWidget->setHorizontalHeaderLabels(QStringList() << "序号" << "测量名称" << "规格"<< "容差"<< "测量类型");  //行表头内容



int a = QString::compare( msg, "点点测量1" );
ui->textEdit->setText(QString::number(a));
if (NULL == a) return;
    if(a==1){
    ui->textEdit->append("OK1");
    QString strModuleName =  ui->tableWidget->item(0,1)->text();
    QString str =  strPrcName + "." + msg ;
    ui->textEdit->append(str);
    QByteArray ba = str.toUtf8(); // must
    const char* ch=ba.data();
    ui->textEdit->append(ch);
    ui->textEdit->append("OK2");
    IMVSP2PMeasureModuTool * pDotMeaModule = (IMVSP2PMeasureModuTool *)(*m_pVmSol)["circle.点点测量1"];
    ui->textEdit->append("OK3");
    // if (NULL == pDotMeaModule) return;
    P2PMeasureResults * pDotMeaParam = pDotMeaModule->GetResult();
    if (NULL == pDotMeaParam) return;
    float pDistParamData = pDotMeaParam->GetDist();
    if (NULL == pDistParamData) return;
    ui->textEdit->setText("");
    // pImageDate.ImageData;
    ui->textEdit->append("圆圆测量1：");
    ui->textEdit->append("距离：");
    QString PRenderDate1 = QString::number(pDistParamData);
    ui->textEdit->insertPlainText(PRenderDate1);
    SaveImageTool *ppimagedata = (SaveImageTool *)(* m_pVmSol)["circle.输出图像1"];
    SaveImageResults *pqimage = ppimagedata->GetResult();
    // QString piamgepath = pqimage->GetRenderImageSavePath();
    ImageData pimage = pqimage->GetOutputImage();
    QImage image((uchar*)pimage.Data,pimage.Width,pimage.Height,QImage::Format::Format_BGR888);
    QImage image ("D:\\Test\\ProcessControl\\ImageTemp\\_1.bmp");
    auto images=image.scaled(QSize(253,357),Qt::AspectRatioMode::KeepAspectRatioByExpanding);
    ui->label_4->setFixedSize(253,357);
    ui->label_4->setPixmap(QPixmap::fromImage(images));
    }else
    {
    ui->textEdit->append("NO1");;
    }
```

```cpp
     在tableWidget中创建下拉框
     QComboBox *cb = new QComboBox();
     cb->addItem("线线测量1");
     cb->addItem("圆圆测量1");
     cb->addItem("点点测量1");
     cb->addItem("线圆测量1");
     cb->addItem("点圆测量1");
     cb->addItem("点线测量1");
     cb->addItem("线线测量2");
     ui->tableWidget->setCellWidget(0,1,cb);
     QString msg;  //获取下拉框内容
     QWidget *widget=ui->tableWidget->cellWidget(0,1);
     QComboBox *combox=(QComboBox*)widget;
     msg=msg.append(combox->currentText())+" ";
     ui->tableWidget->viewport()->update();
     ui->textEdit->append(msg);
```

```cpp
void TestProject::on_AddColumnButton_clicked()  //插入行
{
    int rowCount = ui->tableWidget->rowCount();
    m_contNum = rowCount+1;
    QString strCont = QString::number(m_contNum);
    ui->tableWidget->insertRow(rowCount);
    QTableWidgetItem *it = new QTableWidgetItem(strCont);
    ui->tableWidget->setItem(rowCount, 0, it);
    ui->tableWidget->item(rowCount,0)->setTextAlignment(Qt::AlignHCenter|Qt::AlignVCenter);
    QStringList nameList;
    nameList<<"Name"<<"Specifica"<<"Tolerance"<<"Type"<<"Result";
    //添加下拉框
    // for(int i=1;i<ui->tableWidget->columnCount();i++){
    //     QComboBox *    cb = new QComboBox();
    //     cb->addItem("线线测量1");
    //     cb->addItem("圆圆测量1");
    //     cb->addItem("点点测量1");
    //     cb->addItem("线圆测量1");
    //     cb->addItem("点圆测量1");
    //     cb->addItem("点线测量1");
    //     cb->addItem("线线测量2");
    //     ui->tableWidget->setCellWidget(i,1,cb);
    // }
    for(int col = 0; col<5; col++){
        ui->tableWidget->setItem(rowCount,col+1,new QTableWidgetItem(nameList[col]));
        ui->tableWidget->item(rowCount,col+1)->setTextAlignment(Qt::AlignHCenter|Qt::AlignVCenter);   //内容居中
        ui->tableWidget->item(rowCount,col+1)->setForeground(Qt::gray);
    }
}
```
