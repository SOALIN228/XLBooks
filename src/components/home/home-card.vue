<template>
  <div class="home-card">
    <div class="home-card-inner">
      <div class="user-info">
        <div class="avatar-wrapper">
          <image-view :src="avatar" round></image-view>
        </div>
        <div class="nickname">{{nickname}}</div>
        <div class="shelf-text">书架共有3本好书</div>
        <div class="round-item"></div>
        <div class="shelf-text">特别精选</div>
      </div>
      <div class="book-info">
        <div class="book-wrapper">
          <div class="book-img-wrapper"
               v-for="item of bookList"
               :key="item.id"
               @click="onBookClick"
          >
            <image-view :src="item.cover"></image-view>
          </div>
        </div>
        <div class="shelf-wrapper">
          <div class="shelf">书架</div>
          <van-icon class="arrow" name="arrow" size="11px" color="#828489"></van-icon>
        </div>
      </div>
      <div class="feedback-wrapper" @click="onFeedBackClick">反馈</div>
    </div>
    <van-dialog id="van-dialog"></van-dialog>
  </div>
</template>

<script>
import ImageView from '_c/base/image-view'
import Dialog from 'vant-weapp/dist/dialog/dialog'

export default {
  name: 'HomeCard',
  components: {
    ImageView
  },
  props: {
    data: Object,
    hasSign: {
      type: Boolean,
      default: false
    },
    signDay: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {}
  },
  computed: {
    avatar () {
      return this.data && this.data.userInfo && this.data.userInfo.avatar
    },
    nickname () {
      return this.data && this.data.userInfo && this.data.userInfo.nickname
    },
    bookList () {
      return (this.data && this.data.bookList) || []
    }
  },
  methods: {
    gotoShelf () {
    },
    onBookClick () {
      this.$emit('onClick')
    },
    sign () {
    },
    onFeedBackClick () {
      Dialog.confirm({
        title: '反馈',
        message: '您是否确认提交反馈信息',
        confirmButtonText: '是',
        cancelButtonText: '否'
      }).then(() => {
        console.log('yes')
      }).catch(() => {
        console.log('no')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .home-card {
    background-image: linear-gradient(-90deg, #54575f 0%, #595b60 100%);
    border-radius: 15px;
    margin: 22px 20px 0;

    .home-card-inner {
      position: relative;
      padding: 21.5px 17px 20px 20px;
      box-sizing: border-box;

      .user-info {
        display: flex;
        align-items: center;

        .avatar-wrapper {
          width: 20px;
          height: 20px;
        }

        .nickname,
        .shelf-text {
          font-size: 12px;
          color: #fff;
        }

        .nickname {
          margin: 0 8.5px;
        }

        .shelf-text {
          opacity: .7;
        }

        .round-item {
          width: 4px;
          height: 4px;
          background: #a2a2a2;
          border-radius: 50%;
          margin: 0 8px;
        }
      }

      .book-info {
        display: flex;
        margin-top: 16.5px;

        .book-wrapper {
          display: flex;
          flex: 1;
          justify-content: space-around;

          .book-img-wrapper {
            width: 72px;
            height: 101px;
          }
        }

        .shelf-wrapper {
          display: flex;
          align-items: center;

          .shelf {
            width: 11px;
            font-size: 11px;
            word-break: break-all;
            color: #fff;
            opacity: .8;
          }
        }
      }

      .feedback-wrapper {
        position: absolute;
        top: 19.5px;
        right: 0;
        width: 44.5px;
        height: 23.5px;
        line-height: 23.5px;
        text-align: center;
        background-color: #707070;
        border-radius: 100px 0 0 100px;
        font-size: 11px;
        color: #fff;
      }
    }
  }
</style>
