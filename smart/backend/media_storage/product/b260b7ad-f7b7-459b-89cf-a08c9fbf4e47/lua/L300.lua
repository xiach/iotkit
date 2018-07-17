-----------------------------------------------------------------------------------
-- RoyalCloud provides lua env for data convertion, "device meta <--> lua table" --
--   decode(meta):                                                 --
--     @Desc:Invoked by server, convert device meta data to lua table data.      --
--     @Param:device meta data                                                   --
--     @Return:lua table data                                                    --
--                                                                               --
--   encode(data):                                                   --
--     @Desc:Invoked by server, convert lua table data to device meta data.      --
--     @Param:alink json data                                                    --
--     @Return:device meta data                                                  --
-----------------------------------------------------------------------------------
function fromhex(str)
	return (str:gsub('..', function (cc)
		return string.char(tonumber(cc, 16))
	end))
end
  
function tohex(str)
	return (str:gsub('.', function (c)
		return string.format('%02X', string.byte(c))
	end))
end

function arraytostring(tdlist, pos1, pos2)
	local res ="";
	for i=pos1,pos2 do
		res = res..string.char(tdlist[i])
	end
	res = tohex(res)
	return res;
end

function getByte( frame, index)
  local byt = string.sub(frame, index*2-1, index*2)
  return tonumber(byt, 16)
end

function decode(meta)
	local statusjson = {}
	meta = string.lower(meta)
	if string.find(meta, '494f5443') == 1  then
		local cmd =   getByte(meta, 5)
		print(cmd)
		if(cmd ==0x00) then
			local bufLen = getByte(meta, 6)
			local byte1 = getByte(meta, 7)
			print(byte1)
			if(byte1 ==0x00) then
				statusjson["S_POWER"] = tostring(0)
			else
				statusjson["S_POWER"] = tostring(1)
			end
			local byte2 = getByte(meta, 8)
			statusjson["S_MODE"] = tostring(byte2)
			local coltH = getByte(meta, 9)
			local coltL = getByte(meta, 10)
			local colt = coltH*256+coltL
			statusjson["S_COLTEM"] = tostring(colt)
			local byte4 = getByte(meta, 11)
			statusjson["S_LUM"] = tostring(byte4)
			local rgbw = string.sub(meta, 12*2-1, 15*2)
			statusjson["S_RAW"] = rgbw
			--[[local faultwarn = getByte(meta, 5)
			if(faultwarn == 0) then
				--if(s_faultwarn ~= faultwarn) then
				statusjson["faultWarn"] = "0"
				--end	
			elseif(faultwarn == 1) then
				statusjson["faultWarn"] = "E1"
			elseif(faultwarn == 2) then
				statusjson["faultWarn"] = "E2"
			elseif(faultwarn == 3) then
				statusjson["faultWarn"] = "E3"
			elseif(faultwarn == 4) then
				statusjson["faultWarn"] = "E4"
			elseif(faultwarn == 5) then
				statusjson["faultWarn"] = "E5"
			elseif(faultwarn == 6) then
				statusjson["faultWarn"] = "E6"	
			elseif(faultwarn == 7) then
				statusjson["faultWarn"] = "E7"	
			elseif(faultwarn == 8) then
				statusjson["faultWarn"] = "E8"		
			end	--]]

		end
	 else
	 	print('帧格式不符合状态帧规则')
	 end

    return statusjson
	
end

function encode(cmd)
    print('start encode')
    local metaDataListSample = {
		[0] = 0x49,       
		[1] = 0x4F,       
		[2] = 0x54,       
		[3] = 0x43,
		[4] = 0x00,       
		[5] = 0x00,   
		[6] = 0x00, 
		[7] = 0x00,       
		[8] = 0x00,   
		[9] = 0x00,
		[10] = 0x00,       
		[11] = 0x00,   
		[12] = 0x00,
		[13] = 0x00,       
		[14] = 0x00, 
		[15] = 0x00, 		
    }
	local len = 15
	local metaData = {}
	local idx = 1
	local red = 0
	local gren = 0
	local blue = 0
	local w = 0
	local coltempL = 0
	local coltempH = 0
	local lum = 0
	
	if cmd["S_POWER"] ~= nil then
		local key_value = tonumber(cmd["S_POWER"])
		if(key_value == 0) then
			metaDataListSample[4] = 0x4E;
			metaDataListSample[5] = 0x01;
			metaDataListSample[6] = 0x00;
		else
			metaDataListSample[4] = 0x59;
			metaDataListSample[5] = 0x01;
			metaDataListSample[6] = 0x00;
		end
		len = 6;
		metaData[idx] = arraytostring(metaDataListSample,0,len);
		idx = idx + 1
	end
	
	if cmd["S_RAW"] ~= nil then
		local raw = string.lower(cmd["S_RAW"])
		red = getByte(raw,1)
		gren = getByte(raw,2)
		blue = getByte(raw,3)
		w = getByte(raw,4)
	end
	
	if cmd["S_COLTEM"] ~= nil then
		local coltemp = tonumber(cmd["S_COLTEM"])
		coltempL = coltemp%256
		coltempH = (coltemp - coltempL)/256
		
	end
	
	if cmd["S_LUM"] ~= nil then
		lum = tonumber(cmd["S_LUM"])
	end
	
	if cmd["S_MODE"] ~= nil then
		local key_value = tonumber(cmd["S_MODE"])
		metaDataListSample[4] = 0x43;
		metaDataListSample[5] = 0x0A;
		--//0-关机,1-默认,2-生活,3-阅读,4-浪漫,5-影院,6-炫彩
		if(key_value == 0) then
			metaDataListSample[7] = 0x00;
		elseif(key_value == 1) then
			metaDataListSample[7] = 0x01;
		elseif(key_value == 2) then
			metaDataListSample[7] = 0x02;
		elseif(key_value == 3) then
			metaDataListSample[7] = 0x03;
		elseif(key_value == 4) then
			metaDataListSample[7] = 0x04;
		elseif(key_value == 5) then
			metaDataListSample[7] = 0x05;
		elseif(key_value == 6) then
			metaDataListSample[7] = 0x06;
		else
			metaDataListSample[7] = 0x03;
		end
		metaDataListSample[8] = coltempH;
		metaDataListSample[9] = coltempL;
		metaDataListSample[10] = lum;
		metaDataListSample[11] = red;
		metaDataListSample[12] = gren;
		metaDataListSample[13] = blue;
		metaDataListSample[14] = w;
		metaData[idx] = arraytostring(metaDataListSample,0,len);
		idx = idx + 1
	end
	
	if cmd["S_SNAPSHOT"] ~= nil then
		metaDataListSample[4] = 0x47;
		metaDataListSample[5] = 0x01;
		metaDataListSample[6] = 0x00;
		len = 6;
		metaData[idx] = arraytostring(metaDataListSample,0,len);
		idx = idx + 1
	end
	
    return metaData;
end