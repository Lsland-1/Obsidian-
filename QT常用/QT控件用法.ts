//QTextEdit
    ui->textEdit->setPlainText("Hello, World!");   //设置初始文本
    ui->textEdit->append("This is additional text."); //追加文本
    ui->textEdit->setText("");   //刷新文本框
    QString text = ui->textEdit->toPlainText(); //获取全部文本内容
    ui->textEdit->setFont(QFont("Arial", 12));  //设置字体
    ui->textEdit->setReadOnly(true);  //设置为只读
    connect(ui->textEdit, &QTextEdit::textChanged, [this](){ // 处理文本改变的逻辑
       qDebug() << "Text changed.";
    });

















