<template>
	<div class="detail">
		<div class="container">
			<el-row>
				<el-col :span="8">
					<div class="grid-content bg-purple">
						<el-image :src="this.gedan.coverImgUrl"></el-image>
					</div>
				</el-col>
				<el-col :span="16">
					<div class="grid-content bg-purple-light">
						<h1>{{this.gedan.name}}</h1>
						<el-image :src="this.gedan.creator.avatarUrl" style='width:50px; height:40px'></el-image>
						<span>{{this.gedan.creator.nickname}}</span>
						<!-- <span>{{this.gedan.creator.birthday}}</span> -->
						<span>2019-2-4</span>


						<div style="margin: 5px;margin-bottom: 10px;">
							<button class="btn el-icon-video-play ">播放</button>
							<button class="btn el-icon-folder-add">123456</button>
							<button class="btn el-icon-folder-checked">456</button>
							<button class="btn el-icon-download">160</button>
							<button class="btn el-icon-chat-line-square">160</button>
						</div>
						<span>标签：{{this.gedan.tags}} </span>
						<p> 介绍:{{this.gedan.description}}</p>
					</div>
				</el-col>
			</el-row>

			<!-- <div class="container"> -->
			<h2>歌曲列表</h2>
			<el-table :data="track" style="width: 100%">
				<el-table-column prop="geming" label="歌名" width="200">
				</el-table-column>
				<el-table-column prop="zuozhe" label="作者" width="200">
				</el-table-column>
				<el-table-column prop="shichang" label="时长" width="200">
				</el-table-column>
				<el-table-column prop="zhuanji" label="专辑">
				</el-table-column>
			</el-table>
			<!-- </div>		 -->
		</div>
	</div>

</template>

<script>
	export default {
		name: 'detail',
		data() {
			return {
				gedan: {},
				tracks: [],
				track: []
			}
		},
		methods: {
			getgedan() {
				console.log(this.$route.params.id);
				this.$http.get('/playlist/detail', {
					params: {
						id: this.$route.params.id
					},
					withCredentails: true
				}).then((req) => {
					this.tracks = req.data.playlist.tracks
					this.gedan = req.data.playlist
					for (var i = 0; i <= this.tracks.length; i++) {
						this.track.push({
							geming: this.tracks[i].name,
							zuozhe: this.tracks[i].ar[0].name,
							shichang: this.setTime(this.tracks[i].dt),
							zhuanji: this.tracks[i].al.name
						})
					}
				}).catch((e) => {
					console.log('获取歌单详情失败');
				});
			},
			setTime(t) {
				var time = new Date(t)
				/* var mm=time.getMinutes()
				var ss=time.getSeconds() */
				return time.getMinutes().toString().padStart(2, '0') + ":" +
					time.getSeconds().toString().padStart(2, '0')
			}
		},
		mounted() {
			this.getgedan();
		}
	}
</script>
<style>
</style>
   