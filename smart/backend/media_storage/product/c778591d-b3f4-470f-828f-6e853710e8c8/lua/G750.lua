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
	if string.find(meta, 'aaaa') == 1  then
		local cmd =   getByte(meta, 4)
		print(cmd)
		if(cmd ==0x00) then
			local byte1 = getByte(meta, 5)
			print(byte1)
			local poweronoff = byte1&0xf
			print(poweronoff)
			statusjson["S_POWER"] = tostring(poweronoff)
			local workmode = byte1>>4
			print(workmode)
			statusjson["S_MODE"] = tostring(workmode-1)
			local byte2 = getByte(meta, 6)
			local fanspeed = byte2&0xf
			statusjson["S_FANSPEED"] = tostring(fanspeed)
			local pm25H = getByte(meta, 10)
			local pm25L = getByte(meta, 11)
			local pm25 = pm25H*256+pm25L
			statusjson["S_PM25"] = tostring(pm25)
			local cycletimeH = getByte(meta, 12)
			local cycletimeL = getByte(meta, 13)
			local cycletime = cycletimeH*256+cycletimeL
			statusjson["S_CYCLETIME"] = tostring(cycletime)	
			local faultwarn = getByte(meta, 18)
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
			end	

			local co2H = getByte(meta, 20)
			local co2L = getByte(meta, 21)			
			local co2 = co2H*256+co2L
			statusjson["s_co2"] = tostring(co2)
			local byte20 = getByte(meta, 24)
			local display = byte20&0xf
			statusjson["S_DISPLAY"] = tostring(display)
			local lock = byte20>>4
			statusjson["S_LOCK"] = tostring(lock)

		end
	 else
	 	print('帧格式不符合状态帧规则')
	 end

    return statusjson
	
end

function encode(cmd)
    local metaDataListSample = {
		[0] = 0x00,       
		[1] = 0x00,       
		[2] = 0x00,       
		[3] = 0x00,
		[4] = 0x00,       
		[5] = 0x00,   
		[6] = 0x00, 		
    }
	local len = 5
	local fanSpeed = 0
	local metaData = {}
	local idx = 1
	if cmd["S_POWER"] ~= nil then
		local key_value = tonumber(cmd["S_POWER"])
		if(key_value == 0) then
			metaDataListSample[0] = 0xAA;
			metaDataListSample[1] = 0xAA;
			metaDataListSample[2] = 0x03;
			metaDataListSample[3] = 0x01;
			metaDataListSample[4] = 0x00;
			metaDataListSample[5] = 0x58;
		else
			metaDataListSample[0] = 0xAA;
			metaDataListSample[1] = 0xAA;
			metaDataListSample[2] = 0x03;
			metaDataListSample[3] = 0x01;
			metaDataListSample[4] = 0x01;
			metaDataListSample[5] = 0x59;
		end
		metaData[idx] = arraytostring(metaDataListSample,0,len);
		idx = idx + 1
	end
	
	if cmd["S_CYCLETIME"] ~= nil then
		local hours = tonumber(cmd["S_CYCLETIME"]);
		local total = 0;
		metaDataListSample[0] = 0xAA;
		metaDataListSample[1] = 0xAA;
		metaDataListSample[2] = 0x04;
		metaDataListSample[3] = 0x30;
		metaDataListSample[4] = 0x00;
		metaDataListSample[5] = 0x00;
		metaDataListSample[6] = 0x00;

		metaDataListSample[4] = hours>>8;
		metaDataListSample[5] = hours&0xff;
		for i=0, 5, 1
		do
			total = total + metaDataListSample[i];
		end
		metaDataListSample[6] = total%256;
		len = 6;
		metaData[idx] = arraytostring(metaDataListSample,0,len);
		idx = idx + 1
	end
	
	if cmd["S_DISPLAY"] ~= nil then
		local key_value = tonumber(cmd["S_DISPLAY"])
		if(key_value == 2) then
			metaDataListSample[0] = 0xAA;
			metaDataListSample[1] = 0xAA;
			metaDataListSample[2] = 0x03;
			metaDataListSample[3] = 0x21;
			metaDataListSample[4] = 0x00;
			metaDataListSample[5] = 0x78;
		else
			metaDataListSample[0] = 0xAA;
			metaDataListSample[1] = 0xAA;
			metaDataListSample[2] = 0x03;
			metaDataListSample[3] = 0x21;
			metaDataListSample[4] = 0x01;
			metaDataListSample[5] = 0x79;
		end
		metaData[idx] = arraytostring(metaDataListSample,0,len);
		idx = idx + 1
	end
	
	if cmd["S_LOCK"] ~= nil then
		local key_value = tonumber(cmd["S_LOCK"])
		if(key_value == 2) then
			metaDataListSample[0] = 0xAA;
			metaDataListSample[1] = 0xAA;
			metaDataListSample[2] = 0x03;
			metaDataListSample[3] = 0x20;
			metaDataListSample[4] = 0x00;
			metaDataListSample[5] = 0x77;
		else
			metaDataListSample[0] = 0xAA;
			metaDataListSample[1] = 0xAA;
			metaDataListSample[2] = 0x03;
			metaDataListSample[3] = 0x20;
			metaDataListSample[4] = 0x01;
			metaDataListSample[5] = 0x78;
		end
		metaData[idx] = arraytostring(metaDataListSample,0,len);
		idx = idx + 1
	end
	
	if cmd["S_FANSPEED"] ~= nil then
		fanSpeed = tonumber(cmd["S_FANSPEED"])
	end
	
	if cmd["S_MODE"] ~= nil then
		local key_value = tonumber(cmd["S_MODE"])
		metaDataListSample[0] = 0xAA;
		metaDataListSample[1] = 0xAA;
		metaDataListSample[2] = 0x03;
		--//0-智能,1-新风,2-净化,3-除味,4-送风,5-节能
		if(key_value == 0) then
			metaDataListSample[3] = 0x02;
			metaDataListSample[4] = 0x01;
			metaDataListSample[5] = 0x5A;
		elseif(key_value == 1) then
			metaDataListSample[3] = 0x03;
			metaDataListSample[4] = 0x00 + fanSpeed;
			metaDataListSample[5] = 0x5A + fanSpeed;
		elseif(key_value == 2) then
			metaDataListSample[3] = 0x0C;
			metaDataListSample[4] = 0x00 + fanSpeed;
			metaDataListSample[5] = 0x63 + fanSpeed;
		elseif(key_value == 3) then
			metaDataListSample[3] = 0x0d;
			metaDataListSample[4] = 0x00 + fanSpeed;
			metaDataListSample[5] = 0x64 + fanSpeed;
		elseif(key_value == 4) then
			metaDataListSample[3] = 0x0e;
			metaDataListSample[4] = 0x00 + fanSpeed;
			metaDataListSample[5] = 0x65 + fanSpeed;
		else
			metaDataListSample[3] = 0x0f;
			metaDataListSample[4] = 0x00;
			metaDataListSample[5] = 0x66;
		end
		metaData[idx] = arraytostring(metaDataListSample,0,len);
		idx = idx + 1
	end
	
	if cmd["S_SNAPSHOT"] ~= nil then
		metaDataListSample[0] = 0xAA;
		metaDataListSample[1] = 0xAA;
		metaDataListSample[2] = 0x02;
		metaDataListSample[3] = 0xA0;
		metaDataListSample[4] = 0xF6;
		len = 4;
		metaData[idx] = arraytostring(metaDataListSample,0,len);
		idx = idx + 1
	end
	
    return metaData;
end