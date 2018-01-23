export class Panoramas {
	count : number;
	items : Array<{ 
		type: string,
		id: string,
		self: string,
		data: {
			image_id: string,
			images: {
				thumbnails: Array<{
					height: number,
					width: number,
					url: string,
					content_type: string
				}>,
				cubemaps : Array<{
					size: number,
					lod: number,
					content_type: string,
					format: string
					base_url: string,
				}>,
				previews: Array<{
					width: number,
					content_type: string,
					url: string,
				}>,
				equirectangulars : Array<number>,
				orientation : Array<number>
			},
			title : string,
			description : string,
			created_at : Date,
			privacy : string,
			watermark : {
				show : boolean
			},
			featured_at : Date,
			published_at : Date,
			author : {
				type : string,
				id : string,
				self : string,
				data : {
					username: string,
					display_name : string
				}
			},
			allow_share : boolean
		},
	}>;
	next : string;
	offset : string;
}
