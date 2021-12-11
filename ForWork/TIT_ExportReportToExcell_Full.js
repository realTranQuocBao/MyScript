javascript:
courseID = (new URL(window.location.href)).searchParams.get('id');
window.location = 'https://lmstanphutrung.titkul.edu.vn/report/outline/index.php?id='+courseID;

javascript:
var info = 'STT\tHoạt động\tTruy cập gần nhất\n';
var tpt0 = document.getElementsByClassName('activity cell c0');
var tpt2 = document.getElementsByClassName('lastaccess cell c2 lastcol');
for (var i = 0; i<tpt0.length; i++){
    info += (i+1)+'\t';
	info += (typeof(tpt0[i].getElementsByTagName('a')[0]==="undefined")?tpt0[i].innerText:tpt0[i].getElementsByTagName('a')[0].innerText);
	info += '\t';
	info += (tpt2[i].innerText);
	info += '\n';
}
document.getSelection("html").innerHTML = ("<pre>" + info + "</pre>");

window.prompt('Ctrl+C to copy', info);


javascript:courseID = (new URL(window.location.href)).searchParams.get('id');window.location = 'https://lmstanphutrung.titkul.edu.vn/report/outline/index.php?id='+courseID;

javascript:var info = '';var tpt0 = document.getElementsByClassName('activity cell c0');var tpt2 = document.getElementsByClassName('lastaccess cell c2 lastcol');for (var i = 0; i<tpt0.length; i++){info+=(typeof(tpt0[i].getElementsByTagName('a')[0]==="undefined")?tpt0[i].innerText:tpt0[i].getElementsByTagName('a')[0].innerText);info+='\t';info += (tpt2[i].innerText);info += '\n';};window.prompt('Ctrl+C to copy', info);

javascript:
var tab_text = "<table border='2px'><tr>";
var textRange; var j = 0;
tab = document.getElementById('outlinetable');

monHoc = document.getElementsByClassName('page-header-headings')[0].getElementsByTagName('h1')[0].innerText;
tab_text += ('<td>a</td><td>TÊN GIÁO VIÊN</td><td>' + monHoc + '</td></tr>');
tab_text += '<td>STT</td><td>Hoạt động</td><td>Truy cập gần nhất</td></tr>';
var tpt0 = document.getElementsByClassName('activity cell c0');
var tpt2 = document.getElementsByClassName('lastaccess cell c2 lastcol');
for (var i = 0; i<tpt0.length; i++){
    tab_text += ('<td>' + (i+1) + '</td>');
	tab_text += ('<td>' + (typeof(tpt0[i].getElementsByTagName('a')[0]==="undefined")?tpt0[i].innerText:tpt0[i].getElementsByTagName('a')[0].innerText) + '</td>');
	tab_text += ('<td>' + tpt2[i].innerText + '</td>');
	tab_text += '</tr>';
}

tab_text = tab_text + "</table>";
tab_text = tab_text.replace(/<A[^>]*>|<\/A>/g, "");
tab_text = tab_text.replace(/<img[^>]*>/gi, "");
tab_text = tab_text.replace(/<input[^>]*>|<\/input>/gi, "");

var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
console.log('run ne');
if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))
{
    txtArea1.document.open("txt/html", "replace");
    txtArea1.document.write(tab_text);
    txtArea1.document.close();
    txtArea1.focus();
    sa = txtArea1.document.execCommand("SaveAs", true, "Say Thanks to Sumit.xls");
}
else{
    var a = document.createElement('a');
    a.href = 'data:application/vnd.ms-excel, ' + encodeURIComponent(tab_text);
    a.download = '_' + monHoc + '.xls';
    a.click();
}            