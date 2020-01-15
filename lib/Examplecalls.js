<View style={main.info} >
    <View><Button title=" < " color='black' onPress={() => this.props.navigation.goBack(null)} /></View>

    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Image onPress={() => Linking.openURL(this.state.dump_json.original_post)} style={info.logo} source={{ uri: dumpJson.site_favicon }} />
        { dumpJson.site_name != "" && <Text style={[info.name, fonts.girassol]}>By {dumpJson.site_name}</Text> }
    </View>

    <View><Button title=" + " color='black' onPress={() => this.props.navigation.goBack(null)} /></View>
</View>
<View style={main.header}>
    <Text style={[header.title, fonts.bookerly]}> {dumpJson.article_title}</Text>
    <Text style={[header.pre_title, fonts.bookerly]} >{dumpJson.article_description}</Text>
</View>

{ 
dumpJson.article_image != "" &&
    <View style={main.image}>
        <ImageBackground style={main.bg_image} source={{ uri: dumpJson.article_image }} />
            { this.keywords_text() != "" && <Text style={[main.keywords, fonts.girassol]}>{this.keywords_text()}</Text> }
    </View>
}

<View style={article.main}>
    {this.article_text()}
    <Text 
        style={[fonts.bookerly, misc.strong, { textDecorationLine: 'underline', fontSize: 20, marginVertical: 20 }]}
        onPress={() => Linking.openURL(this.state.dump_json.original_post)}>
        If you liked it, we recommend that you read from the original source: {dumpJson.original_post}
        </Text>
</View>