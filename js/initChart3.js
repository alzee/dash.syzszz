const labels3 = ['一月','二月','三月', '四月', '五月', '六月', '七月'];
const data3 = {
  labels: labels3,
  datasets: [
    {
      label: '茅箭区',
      data: [92,23,94,85,57,68,89],
      borderColor: '#36a2eb',
      backgroundColor: '#36a2eb',
    },
    {
      label: '张湾区',
      data: [98,73,82,92,61,91,81],
      borderColor: '#4bc0c0',
      backgroundColor: '#4bc0c0',
    }
  ]
};

const config3 = {
  type: 'radar',
  data: data3,
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '区域订单量'
      }
    }
  },
};

const chart3 = new Chart(document.getElementById('chart3'), config3);
chart3.height = 300;