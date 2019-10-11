Component({
  data: {
    active: 0,
    list: [
      {
        url: '../../pages/index/index',
        icon: 'flower-o',
        text: '生活指南',
      },
      {
        url: '../../pages/subjects-information/index',
        icon: 'notes-o',
        text: '学科信息',
      },
    ]
  },
  methods: {
    onChange(event) {
      console.log(event.detail)
      this.setData({ active: event.detail });
      wx.switchTab({
        url: this.data.list[event.detail].url
      });
    },
    init() {
			this.setData({
				active: 0
			});
		}
  }
})