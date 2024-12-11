var tipuesearch = {"pages": [{'title': 'About', 'text': '國立虎尾科技大學機械設計工程系 \n National Formosa University \n Department of Mechanical Design Engineering \n cp2024 計算機程式 \n 課程教材: \n Learn Python with Jupyter  ( site ,  ebook ) \n 教育版帳號\xa0microsoftonline 登入點:\xa0 https://login.microsoftonline.com/ \n Teams 線上教學: \n 以 "學號@nfu.edu.tw" 登入  https://login.microsoftonline.com/  Office 365 \n Teams 團隊代碼:\xa0 fqpabi8 \n 個人倉儲:  https://github.com/mdecp2024/hw-41323207 \n 個人網站:  https://mdecp2024.github.io/hw-41323207 \n 其他資訊: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n', 'tags': '', 'url': 'About.html'}, {'title': 'Attendance', 'text': '出席 (10%) - 自行舉證評分 \n 自行利用 Github commits 提交記錄評分. \n', 'tags': '', 'url': 'Attendance.html'}, {'title': 'HW 1', 'text': '主題: 基於瀏覽器的分散式版次管理與整合程式開發環境 (10%) \n USB 隨身碟: \n 下載  python_2025_lite.7z  (428 MB, 解開壓縮後約 1.5 GB) \n Jupyter \n What are Github and Codespaces? \n Hello World - GitHub Docs \n 利用包含學號的字串作為帳號, 申請免費使用 Github. \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 1 \n \n PART 1: Creating the basics 資料整理 (10%) \n 啟動可攜程式系統後, 在命令列中: \n y:\\>cd notebook \n y:\\notebook>jupyter lab --collaborative \n 進入  01_string_input_print.ipynb  練習如何修改 PART1 notebook 後存檔, 上傳至作業倉儲中的 downloads 目錄後, 透過  https://nbviewer.org/  將已經提交的  01_string_input_print.ipynb , 嵌入下列網頁中. \n \n 上列 iframe 標註的 html 語法: \n <iframe width="600" height="400" src="https://nbviewer.org/urls/mde.tw/cp2024_hw/downloads/01_string_input_print.ipynb"></iframe> \n 完成上述流程整理後, 請將 HW1 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 1.html'}, {'title': 'HW 1 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 Topic 1 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 1 Exam.html'}, {'title': 'w7', 'text': '以下影片說明如何在作業網站加入 Bython 頁面,同時練習 print 與 for 迴圈的用法: \n \n \n', 'tags': '', 'url': 'w7.html'}, {'title': 'w10', 'text': '\n \n \n', 'tags': '', 'url': 'w10.html'}, {'title': 'w11_hw', 'text': '1.\xa0 已知可以用 Python 程式 由上往下列印三角形 * , 或 由左往右列印三角形 * , 請將此程式延伸到可以在 10x10 的字元區域中, 以 "*" 字元列印出圓型區域. 完成後請將程式碼存入個人 Gist 後, 直接在個人作業網站中的 Brython 頁面中執行. (提示: ?src=gist_script_URL) \n 第一題: "*"字號型圖 \n def draw_circle(radius, center, size=10):\n    h, k = center  # 圓心座標\n    for y in range(size):\n        for x in range(size):\n            # 計算 (x, y) 是否在圓形的範圍內\n            if (x - h)**2 + (y - k)**2 <= radius**2:\n                print(\'*\', end=\' \')\n            else:\n                print(\' \', end=\' \')\n        print()  # 換行\n\n# 設定圓心為 (5, 5)，半徑為 4\ndraw_circle(4, (5, 5)) \n \n 2. 已知可以在網頁中利用 Brython 繪製方格與塗色, 如下連結, 請設法修改此一程式, 直接將程式存入個人的 Gist, 並利用黑色方塊圍出一個圓形區域. \n 第二題: 網頁上的方格與塗色 \n def draw_circle(radius, center, size=10):\n    h, k = center  # 圓心座標\n    for y in range(size):\n        for x in range(size):\n            # 計算 (x, y) 是否在圓形的範圍內\n            if (x - h)**2 + (y - k)**2 <= radius**2:\n                print(\'*\', end=\' \')\n            else:\n                print(\' \', end=\' \')\n        print()  # 換行\n\n# 設定圓心為 (5, 5)，半徑為 4\ndraw_circle(4, (5, 5))\nfrom browser import html\nfrom browser import document as doc\n\n# 利用 html 建立畫布\ncanvas = html.CANVAS(width=400, height=400)\nbrython_div = doc["brython_div1"]\nbrython_div <= canvas\n\n# 每格的像素數\ngs = 40  # 每個方格的大小設為 40，可以根據需要調整大小\n\n# 獲取繪圖上下文\nctx = canvas.getContext("2d")\n\n# 繪製矩形的函數\ndef dRect(lux, luy, w, h, s=1, c=\'#ff0000\'):\n    ctx.lineWidth = s\n    ctx.strokeStyle = c\n    ctx.beginPath()\n    ctx.rect(lux, luy, w, h)\n    ctx.stroke()\n\n# 繪製網格並在每格內填充黑色圓形區域\ndef grid(width, height, grid_pix, cx, cy, r):\n    for i in range(width):\n        for j in range(height):\n            # 如果這個格子在圓形區域內，將其填充為黑色\n            if (i - cx) ** 2 + (j - cy) ** 2 <= r ** 2:\n                ctx.fillStyle = "black"\n                ctx.fillRect(i * grid_pix, j * grid_pix, grid_pix, grid_pix)\n            else:\n                # 其餘格子繪製為灰色\n                dRect(i * grid_pix, j * grid_pix, grid_pix, grid_pix, 1, "lightgrey")\n\n# 設定圓形的位置與半徑\ncircle_center_x = 5  # 圓心在 10x10 方格的中間位置\ncircle_center_y = 5\ncircle_radius = 4    # 圓的半徑\n\n# 繪製 10x10 的網格，每格大小為 40 像素\ngrid(10, 10, gs, circle_center_x, circle_center_y, circle_radius) \n \n 課堂練習 \n \n 圖框', 'tags': '', 'url': 'w11_hw.html'}, {'title': 'w12', 'text': '', 'tags': '', 'url': 'w12.html'}, {'title': 'w13', 'text': '圓 : \n from browser import html\nfrom browser import document as doc\nimport math\n\n# 利用 html 建立 canvas 超文件物件\ncanvas = html.CANVAS(width=600, height=600)\nbrython_div = doc["brython_div1"]\nbrython_div <= canvas\n\nctx = canvas.getContext("2d")\nctx.lineWidth = 1\n\n# 繪製兩個矩形\nctx.strokeStyle = \'red\' # 設定矩形顏色為紅色\nctx.beginPath()\nctx.rect(150, 150, 200, 200)\nctx.rect(250, 250, 200, 200)\nctx.stroke()\n\n# 繪製對角線，顏色設定為藍色\nctx.strokeStyle = \'blue\' # 設定對角線顏色為藍色\nctx.beginPath()\nctx.moveTo(150, 150)\nctx.lineTo(350, 350)\nctx.stroke()\n\n# 計算外切圓的圓心和半徑\n# 矩形 1 的屬性\nx1, y1, w1, h1 = 150, 150, 200, 200\n# 矩形 2 的屬性\nx2, y2, w2, h2 = 250, 250, 200, 200\n\n# 矩形 1 的對角線長度\ndiagonal1 = math.sqrt(w1**2 + h1**2)\nradius1 = diagonal1 / 2 # 外切圓半徑是對角線長度的一半\ncenterX1 = x1 + w1 / 2 # 圓心 X 坐標\ncenterY1 = y1 + h1 / 2 # 圓心 Y 坐標\n\n# 繪製矩形 1 的外切圓\nctx.strokeStyle = \'black\' # 設定圓的顏色為綠色\nctx.beginPath()\nctx.arc(centerX1, centerY1, radius1, 0, 2 * math.pi) # 圓心和半徑\nctx.stroke()\n\n# 矩形 2 的對角線長度\ndiagonal2 = math.sqrt(w2**2 + h2**2)\nradius2 = diagonal2 / 2 # 外切圓半徑是對角線長度的一半\ncenterX2 = x2 + w2 / 2 # 圓心 X 坐標\ncenterY2 = y2 + h2 / 2 # 圓心 Y 坐標\n\n# 繪製矩形 2 的外切圓\nctx.strokeStyle = \'black\' # 設定圓的顏色為紫色\nctx.beginPath()\nctx.arc(centerX2, centerY2, radius2, 0, 2 * math.pi) # 圓心和半徑\nctx.stroke() \n 圓塗色 : \n from browser import html\nfrom browser import document as doc\n\n# 設置畫布\ncanvas = html.CANVAS(width=600, height=600)\nbrython_div = doc["brython_div1"]\nbrython_div <= canvas\n\nctx = canvas.getContext("2d")\nctx.lineWidth = 1\n\n# 畫兩個矩形 (紅色邊框)\nctx.strokeStyle = \'red\'\nctx.beginPath()\nctx.rect(100, 100, 200, 200)\nctx.rect(200, 200, 200, 200)\nctx.stroke()\n\n# 畫對角線 (藍色)\nctx.strokeStyle = \'blue\'\nctx.beginPath()\nctx.moveTo(100, 100)\nctx.lineTo(300, 300)\nctx.stroke()\n\n# 畫兩個圓形 (黑色)\nctx.strokeStyle = \'black\'\nctx.beginPath()\nctx.arc(200, 200, 141.4, 0, 2 * 3.14)\nctx.stroke()\nctx.beginPath()\nctx.arc(300, 300, 141.4, 0, 2 * 3.14)\nctx.stroke()\n\n# 判斷點的位置\ndef point_in_circle1(x, y):\ncx, cy, r = 200, 200, 141.4\nreturn (x - cx) ** 2 + (y - cy) ** 2 < r ** 2\n\ndef point_in_square1(x, y):\nreturn 100 <= x <= 300 and 100 <= y <= 300\n\ndef point_outside_square1(x, y):\nreturn not point_in_square1(x, y)\n\ndef point_in_circle2(x, y):\ncx, cy, r = 300, 300, 141.4\nreturn (x - cx) ** 2 + (y - cy) ** 2 < r ** 2\n\ndef point_inside_square2(x, y):\nreturn 200 <= x <= 400 and 200 <= y <= 400\n\ndef point_on_line_segment(x, y):\nreturn y == x and 100 <= x <= 300 and 100 <= y <= 300\n\ndef point_above_line(x, y):\nreturn y < x\n\ndef point_below_line(x, y):\nreturn y > x\n\n# 判斷點是否在正方形的上方、下方、左方、右方\ndef point_above_square1(x, y):\nreturn y < 100\n\ndef point_below_square1(x, y):\nreturn y > 300\n\ndef point_left_of_square1(x, y):\nreturn x < 100\n\ndef point_right_of_square1(x, y):\nreturn x > 300\n\ndef point_above_square2(x, y):\nreturn y < 200\n\ndef point_below_square2(x, y):\nreturn y > 400\n\ndef point_left_of_square2(x, y):\nreturn x < 200\n\ndef point_right_of_square2(x, y):\nreturn x > 400\n\n# 取得點所屬區域的函式\ndef get_region(x, y):\nregions = []\nif point_in_circle1(x, y):\nregions.append("circle1")\nif point_in_square1(x, y):\nregions.append("inside_square1")\nif point_outside_square1(x, y):\nregions.append("outside_square1")\nif point_in_circle2(x, y):\nregions.append("circle2")\nif point_inside_square2(x, y):\nregions.append("inside_square2")\nif point_on_line_segment(x, y):\nregions.append("on_line_segment")\nif point_above_line(x, y):\nregions.append("above_line")\nif point_below_line(x, y):\nregions.append("below_line")\n\n# 新增正方形上下左右區分\nif point_above_square1(x, y):\nregions.append("above_square1")\nif point_below_square1(x, y):\nregions.append("below_square1")\nif point_left_of_square1(x, y):\nregions.append("left_of_square1")\nif point_right_of_square1(x, y):\nregions.append("right_of_square1")\n\nif point_above_square2(x, y):\nregions.append("above_square2")\nif point_below_square2(x, y):\nregions.append("below_square2")\nif point_left_of_square2(x, y):\nregions.append("left_of_square2")\nif point_right_of_square2(x, y):\nregions.append("right_of_square2")\n\nreturn regions\n\n# 根據區域屬性決定顏色\ndef get_region_color(x, y):\nregions = get_region(x, y)\n\n# 只要點不在兩個圓內，則不進行顏色標註\nif "circle1" not in regions and "circle2" not in regions:\nreturn None # 圓外區域不著色\n\n# 第一個圓內且第二個圓內\nif "circle1" in regions and "circle2" in regions:\nreturn "lightgreen" # 兩個圓內部的區域\n\n# 第一個圓內且在第一個正方形內部\nif "circle1" in regions and "inside_square1" in regions:\nif point_above_line(x, y):\nreturn "white" # 第一個圓內且位於第一個正方形內部且對角線上方\nelif point_below_line(x, y):\nreturn "white" # 第一個圓內且位於第一個正方形內部且對角線下方\n\n# 第一個圓內且不在第一個正方形內部\nif "circle1" in regions and "outside_square1" in regions:\nif point_above_square1(x, y):\nreturn "gray" # 第一個圓內且位於正方形上方\nelif point_below_square1(x, y):\nreturn "yellow" # 第一個圓內且位於正方形下方\nelif point_left_of_square1(x, y):\nreturn "black" # 第一個圓內且位於正方形左方\nelif point_right_of_square1(x, y):\nreturn "blue" # 第一個圓內且位於正方形右方\n\n# 第二個圓內且在第二個正方形內部\nif "circle2" in regions and "inside_square2" in regions:\nreturn "white" # 第二個圓內且在正方形2內部\n\n# 第二個圓內但不在第二個正方形內部\nif "circle2" in regions and "outside_square2" in regions:\nif point_above_square2(x, y):\nreturn "blue" # 第二個圓內且位於正方形2上方\nelif point_below_square2(x, y):\nreturn "pink" # 第二個圓內且位於正方形2下方\nelif point_left_of_square2(x, y):\nreturn "lightgreen" # 第二個圓內且位於正方形2左方\nelif point_right_of_square2(x, y):\nreturn "lightyellow" # 第二個圓內且位於正方形2右方\n\n# 標註對角線位置\nif "on_line_segment" in regions:\nreturn "black" # 位於對角線上\nelif "above_line" in regions:\nreturn "purple" # 位於對角線上方\nelif "below_line" in regions:\nreturn "green" # 位於對角線下方\n\nreturn None # 沒有符合的區域，則不著色\n\n# 繪製掃描點並著色\ndef scan_and_draw():\nfor y in range(0, canvas.height, 1): # 每10個像素掃描一次\nfor x in range(0, canvas.width, 1):\ncolor = get_region_color(x, y)\nif color:\nctx.fillStyle = color\nctx.beginPath()\nctx.arc(x + 1, y + 1, 1, 0, 2 * 3.14) # 用圓點標示\nctx.fill()\n\n# 開始掃描和標示\nscan_and_draw() \n', 'tags': '', 'url': 'w13.html'}, {'title': 'w14', 'text': '請根據兩個圓繪圖所圍成的 區域 (目前圍成三個區域, 但若圓心移動可能彼此獨立)進行不同顏色著色, 條件是當各圓半徑與圓心座標變動時, 程式只需輸入兩個圓的圓心座標與半徑, 就可以完成各區域的著色任務. \n 參考範例 \n 多個圓相交區域著色範例 \n 以下為參考範例的詳細說明, 請根據此一程式架構, 修改為三個圓的區域塗色任務. \n 三個圓塗色 : \n from browser import html\nfrom browser import document as doc\nimport random\nimport math\n\n# 定義一個函式來初始化畫布\ndef initialize_canvas(canvas_width=500, canvas_height=500, id="brython_div1"):\n# 創建 canvas 並設置寬度與高度\ncanvas = html.CANVAS(width=canvas_width, height=canvas_height)\nbrython_div = doc[id]\nbrython_div <= canvas\n\n# 獲取 canvas 的 2D 上下文\nctx = canvas.getContext("2d")\n\nreturn canvas, ctx\n\n# 定義一個隨機顏色生成函式\ndef random_color_generator():\nr = random.randint(0, 255)\ng = random.randint(0, 255)\nb = random.randint(0, 255)\nreturn f"rgb({r}, {g}, {b})"\n\n# 判斷點 (px, py) 是否在圓內\ndef is_point_in_circle(px, py, cx, cy, r):\nreturn (px - cx) ** 2 + (py - cy) ** 2 <= r ** 2\n\n# 使用者設定的圓心座標和半徑，並進行掃描線填充\ndef draw_circles(x1, y1, r1, x2, y2, r2):\n# 初始化畫布\ncanvas, ctx = initialize_canvas(500, 500)\n\n# 清除畫布\nctx.clearRect(0, 0, canvas.width, canvas.height)\n\n# 顏色區域存儲\ncolor_dict = {}\n\n# 使用掃描線方法填充區域\nfor py in range(0, canvas.height):\n# 逐行掃描，判斷每個點是否在圓內\ncurrent_color = None # 當前掃描線區域的顏色\nfor px in range(0, canvas.width):\nin_circle1 = is_point_in_circle(px, py, x1, y1, r1)\nin_circle2 = is_point_in_circle(px, py, x2, y2, r2)\nin_circle3 = is_point_in_circle(px, py, x3, y3, r3)\n\nif in_circle1 and in_circle2 and in_circle3:\n# 三個圓的交集區域\nif "intersection_all" not in color_dict:\ncolor_dict["intersection_all"] = random_color_generator()\ncurrent_color = color_dict["intersection_all"]\nelif in_circle1 and in_circle2:\n# 圓1和圓2的交集區域\nif "intersection_1_2" not in color_dict:\ncolor_dict["intersection_1_2"] = random_color_generator()\ncurrent_color = color_dict["intersection_1_2"]\nelif in_circle1 and in_circle3:\n# 圓1和圓3的交集區域\nif "intersection_1_3" not in color_dict:\ncolor_dict["intersection_1_3"] = random_color_generator()\ncurrent_color = color_dict["intersection_1_3"]\nelif in_circle2 and in_circle3:\n# 圓2和圓3的交集區域\nif "intersection_2_3" not in color_dict:\ncolor_dict["intersection_2_3"] = random_color_generator()\ncurrent_color = color_dict["intersection_2_3"]\n\nelif in_circle1:\n# 只在圓1內\nif "circle1" not in color_dict:\ncolor_dict["circle1"] = random_color_generator()\ncurrent_color = color_dict["circle1"]\nelif in_circle2:\n# 只在圓2內\nif "circle2" not in color_dict:\ncolor_dict["circle2"] = random_color_generator()\ncurrent_color = color_dict["circle2"]\nelif in_circle3:\n# 只在圓3內\nif "circle3" not in color_dict:\ncolor_dict["circle3"] = random_color_generator()\ncurrent_color = color_dict["circle3"]\nelse:\n# 點不在兩個圓內，畫外區域\ncurrent_color = "white" # 背景色白色\n\n# 填充顏色\nctx.fillStyle = current_color\nctx.fillRect(px, py, 1, 1) # 填充一個像素\n\n# 直接設定圓心和半徑\nx1, y1, r1 = 150, 200, 100 # 圓1：圓心 (150, 200)，半徑 100\nx2, y2, r2 = 250, 200, 100 # 圓2：圓心 (250, 200)，半徑 100\nx3, y3, r3 = 350, 200, 100 # 圓3：圓心 (350, 200)，半徑 100\n\n# 呼叫畫圓函式\ndraw_circles(x1, y1, r1, x2, y2, r2) \n', 'tags': '', 'url': 'w14.html'}, {'title': 'HW 2', 'text': '主題: Python 的數列、判斷式與重複迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 2 and Part 3 \n \n 延續 HW 1 網頁資料整理與程式練習方法, 整理下列內容 (20%): \n PART 2: Introduction to lists and if/else statements \n PART 3: Introduction to the for loop \n 完成上述流程整理後, 請將 HW2 自評分數輸入 cp2024 自評表單中.', 'tags': '', 'url': 'HW 2.html'}, {'title': 'HW 2 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 2 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 2 Exam.html'}, {'title': 'HW 3', 'text': '主題: Python 的數字、演算法與迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 4 and Part 5 \n 完成上述流程整理後, 請將 HW3 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 3.html'}, {'title': 'HW 3 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 3 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 3 Exam.html'}, {'title': 'w5', 'text': "\n def print_pyramid(height):\nfor i in range(height):\n# 打印空格\nprint(' ' * (height - i - 1), end='')\n# 打印星號\nprint('*' * (2 * i + 1))\n\n# 設定金字塔高度為 6\nprint_pyramid(6) \n \n \xa0 \xa0 \xa0 \xa0 \xa0* \xa0 \xa0 \xa0 \xa0*** \xa0 \xa0 \xa0***** \xa0 \xa0******* \xa0********* *********** \n", 'tags': '', 'url': 'w5.html'}, {'title': 'w6', 'text': '操作步驟: \n \n 下載\xa0 python_2025_lite.7z \xa0(可攜程式環境) \n 下載 \xa0 zmq_remote_api_ex_cube_triangle.7z \xa0(利用 Python 控制模擬場景中的物件) \n 進入可攜程式環境中 data/CoppeliaSim 目錄, 開啟 coppeliaSim.exe (機電整合模擬程式, \xa0 原始碼 ) \n 啟動可攜程式環境, 雙點擊 start_ipv6.bat, 系統會啟動四個命令列, 兩個 SciTE 編輯器 \n 執行場景控制程式前, 先處理操作系統的防火牆, 將下列指令存為 .bat 檔案後, 以管理員身分執行, 以便開啟 23000-23050 埠號進出: \n netsh advfirewall firewall add rule name="allow_23000-23050" dir=in action=allow protocol=TCP localport=23000-23050 netsh advfirewall firewall add rule name="allow_23000-23050" dir=out action=allow protocol=TCP localport=23000-23050 \n 開啟 CoppeliaSim 中的視覺串流伺服器: Modules - Connectivity - Visualization stream \n 利用 SciTE 開啟\xa0put_cubes_into_scene_1.py, 利用 Tools - Go 執行操控程式 \n 使用者可以透過瀏覽器, 以模擬場景所在電腦的 IP, 且埠號為 23020 觀看模擬場景 \xa0 \xa0120.113.99.16:23020 \n \n', 'tags': '', 'url': 'w6.html'}, {'title': 'HW 4', 'text': '主題: 利用 Python 控制機電模擬系統 (20%) \n 利用\xa0 https://solvespace.com/ \xa0建立機械系統零組件 \n 利用  CoppeliaSim  建立機電模擬系統 \n 利用  Python  跨網路控制瀏覽器上的機電模擬系統 \n 範例: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n 完成上述流程整理後, 請將 HW4 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 4.html'}, {'title': 'HW 4 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 4 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 4 Exam.html'}, {'title': 'Final Report', 'text': '期末口頭與書面專題報告 (20%) \n 期末口頭專題報告影片: \n ...... \n 期末書面專題報告檔案 (pdf): \n ...... \n 電腦輔助設計與實習課程總結心得: \n ...... \n 期末報告自評成績: \n 完成上述流程後, 請將 Final Report 自評分數輸入 cp2024 自評表單中. \n \n \n', 'tags': '', 'url': 'Final Report.html'}, {'title': 'Brython', 'text': '從 1 累加到 100: \n 1 add to 100 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};